(ns twentyfortyeight.logic
  (:require [cljs.spec.alpha :as s]
            [twentyfortyeight.db :as d]
            [cljs.spec.gen.alpha :as gen]
            [orchestra-cljs.spec.test :as st]
            [twentyfortyeight.db :as db]))

(s/fdef position
  :args (s/cat :axis ::d/axis :tile ::d/tile)
  :ret ::d/within-board-size)

(defn- position
  [axis tile]
  (get-in tile [:position axis]))

(s/fdef sort-tiles-by-priority
        :args (s/cat :direction ::d/direction :tiles (s/coll-of ::d/tile))
        :ret (s/coll-of ::d/tile))

(defn- sort-tiles-by-priority
  [direction tiles]
  (let [descending #(> %1 %2)]
    (case direction
      :up (sort-by #(position :y %) tiles)
      :down (sort-by #(position :y %) descending tiles)
      :left (sort-by #(position :x %) tiles)
      :right (sort-by #(position :x %) descending tiles))))

(s/def ::tiles-to-move (s/coll-of (s/coll-of ::d/tile)))

(s/fdef rows-in-direction
        :args (s/cat :direction ::d/direction :board ::d/game-board)
        :ret ::tiles-to-move)

(defn- rows-in-direction
  [direction board]
    (cond
     (#{:up :down} direction) (vals (group-by #(position :x %) board))
     (#{:left :right} direction) (vals (group-by #(position :y %) board))))

(defn- join-tiles
  [first-tile second-tile]
  {:id (or (:id second-tile)(:id first-tile))
   :value (+ (:value first-tile) (:value second-tile))
   :position (or (:position second-tile) (:position first-tile))})

(defn- join-group
  [group]
  (map (fn [[f s]] (join-tiles f s)) (map reverse (partition-all 2 group))))

(s/fdef join-first
  :args (s/cat :tiles (s/coll-of ::d/tile :into []))
  :ret (s/coll-of ::d/tile)
  :fn #(>= (count (-> % :args :tiles)) (count (-> % :ret))))

(defn- join-first
  [tiles]
  (reduce (fn [acc group] (if (= 1 (count group))
                                   (concat acc group)
                                   (concat acc (join-group group))))
          '() (partition-by :value tiles)))

(defn- is-stacked-from-top-to-bottom?
  [tiles]
  (let [y-positions (into #{} (map #(-> % :position :y)) tiles)
        expected-positions (set (range (count y-positions)))]
    (= y-positions expected-positions)))

(s/fdef stack-top-to-bottom
        :args (s/cat :tiles (s/coll-of ::d/tile))
        :ret (s/coll-of ::d/tile)
        :fn #(is-stacked-from-top-to-bottom? (:ret %)))

(defn- stack-top-to-bottom
  [tiles]
  (map-indexed (fn [i t] (assoc-in t [:position :y] i)) tiles))

(defn- stack-bottom-to-top
  [tiles]
  (map-indexed (fn [i t] (assoc-in t [:position :y] (- (dec d/board-size) i)))  tiles))

(defn- stack-left-to-right
  [tiles]
  (map-indexed (fn [i t] (assoc-in t [:position :x] i)) tiles))

(defn- stack-right-to-left
  [tiles]
  (map-indexed (fn [i t] (assoc-in t [:position :x] (- (dec d/board-size) i)))  tiles))

(s/fdef stack-tiles
        :args (s/cat :direction ::d/direction :tiles (s/and (s/coll-of ::d/tile)))
        :ret (s/coll-of ::d/tile))

(defn- stack-tiles
  [direction tiles]
  (case direction
    :up (stack-top-to-bottom tiles)
    :down (stack-bottom-to-top tiles)
    :right (stack-right-to-left tiles)
    :left (stack-left-to-right tiles)))

(s/fdef random-open-position
        :args (s/cat :board ::d/game-board)
        :ret ::d/position)

(defn- random-open-position
  [board]
  (let [occupied-positions (into #{} (map :position) board)
        free-positions (filter (complement occupied-positions) d/all-positions)]
    (rand-nth free-positions)))

(defn- random-tile-value
  []
  (rand-nth d/tile-frequencies))

(defn- same-board?
  [b1 b2]
  (= (set b1) (set b2)))

(defn- is-board-full?
  [board]
  (= d/max-tiles (count board)))

(s/fdef maybe-insert-new-random-tile
        :args (s/cat :last-board ::d/game-board :new-board ::d/game-board)
        :ret ::d/game-board)

(defn- maybe-insert-new-random-tile
  [last-board new-board]
  (if-not (or (same-board? last-board new-board) (is-board-full? new-board))
    (conj new-board {:id (str (random-uuid))
                     :position (random-open-position new-board)
                     :value (random-tile-value)})
    new-board))

(s/fdef move-direction
        :args (s/cat :board ::d/game-board :direction ::d/direction)
        :ret ::d/game-board)

(defn move-and-join
  [board direction]
  (->> (rows-in-direction direction board)
       (map (partial sort-tiles-by-priority direction))
       (map join-first)
       (mapcat (partial stack-tiles direction))))

(defn move-direction
  [board direction]
  (->>
   (move-and-join board direction)
   (maybe-insert-new-random-tile board)))
