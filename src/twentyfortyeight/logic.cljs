(ns twentyfortyeight.logic
  (:require [cljs.spec :as s]
            [twentyfortyeight.db :as d]
            [cljs.spec.impl.gen :as gen]
            [cljs.spec.test :as st]
            [twentyfortyeight.db :as db]))

(s/fdef sort-tiles-by-priority
        :args (s/cat :direction ::d/direction :tiles (s/coll-of ::d/tile))
        :ret (s/coll-of ::d/tile))

(defn- sort-tiles-by-priority
  [direction tiles]
  (let [reverse #(> %1 %2)]
    (case direction
      :up (sort-by #(-> % :position :y)  tiles)
      :down (sort-by #(-> % :position :y) reverse tiles)
      :left (sort-by #(-> % :position :x)  tiles)
      :right (sort-by #(-> % :position :x) reverse tiles))))

(def ^:private vertical?  #{:up :down})

(def ^:private horizontal? #{:left :right})

(s/fdef group-by-position
        :args (s/cat :board ::d/game-board :axis #{:x :y})
        :ret (s/coll-of (s/coll-of ::d/tile)))

(defn- group-by-position
  [board axis]
  (group-by #(-> % :position axis) board))

(s/def ::tiles-to-move (s/coll-of (s/coll-of ::d/tile)))

(s/fdef rows-in-direction
        :args (s/cat :direction ::d/direction :board ::d/game-board)
        :ret ::tiles-to-move)

(defn- rows-in-direction
  [direction board]
  (cond
    (vertical? direction) (vals (group-by-position board :x))
    (horizontal? direction) (vals (group-by-position board :y))))

(defn- maybe-count-decreased-by-one?
  [in-tiles out-tiles]
  (or
   (= (count out-tiles) (count in-tiles))
   (= (count out-tiles) (dec (count in-tiles)))))

(defn- indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))

(s/fdef join-first
        :args (s/cat :tiles (s/coll-of ::d/tile :into []))
        :ret (s/coll-of ::d/tile)
        :fn #(maybe-count-decreased-by-one? (-> % :args :tiles) (-> % :ret)))

(defn- join-first
  [tiles]
  (if-let [match  (seq (indices #(<= 2 (count %)) (partition-by :value tiles)))]
    (let [idx-start  (first match)
          idx-end (+ idx-start 2)
          [first-tile second-tile] (subvec (vec tiles) idx-start idx-end)
          new-value (+ (:value first-tile) (:value second-tile))
          new-position (or (:position second-tile) (:position first-tile))
          new-tile {:id (:id second-tile) :value new-value :position new-position}]
      (concat (take idx-start tiles) [new-tile] (drop idx-end tiles)))
    tiles))

(defn- is-stacked-from-top-to-bottom?
  [tiles]
  (let [y-positions (into #{} (map #(-> % :position :y)) tiles )
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

(defn move-direction
  [board direction]
  (->> (rows-in-direction direction board)
       (map (partial sort-tiles-by-priority direction))
       (map join-first)
       (mapcat (partial stack-tiles direction))
       (maybe-insert-new-random-tile board)))
