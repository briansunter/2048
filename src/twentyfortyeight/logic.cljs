(ns twentyfortyeight.logic
  (:require [cljs.spec :as s]
            [cljs.spec.test :as st]))

(def directions #{::up ::down ::right ::left})

(def board-size 5)

(s/def ::within-board-size (s/int-in 0 board-size))
(s/def ::x ::within-board-size)
(s/def ::y ::within-board-size)
(s/def ::direction directions)
(s/def ::position (s/keys :req [::x ::y]))
(s/def ::value (s/with-gen pos-int? (fn [] (s/gen (s/and pos-int? #(< 0 % 10))))))
(s/def ::tile (s/keys :req [::position ::value]))

(s/def ::game-board (s/and
                     (s/coll-of ::tile :max-count (* board-size board-size))
                     #(apply distinct? (map ::position %))))

(s/def ::app-db (s/keys :req [::game-board]))

(s/fdef move-direction
        :args (s/cat :board ::game-board :direction ::direction)
        :ret ::game-board)

(defn tile-comparator
  [direction]
  (fn [tile1 tile2]
    (let [{x1 ::x y1 ::y} (::position tile1)
          {x2 ::x y2 ::y} (::position tile2)]
      (case direction
        ::up (compare y1 y2)
        ::down (compare y2 y1)
        ::right (compare x1 x2)
        ::left (compare x2 x1)))))

(s/fdef sort-tiles-by-priority
        :args (s/cat :direction ::direction :tiles (s/coll-of ::tile))
        :ret (s/coll-of ::tile))

(defn sort-tiles-by-priority
  [direction tiles]
  (sort (tile-comparator direction) tiles))

(s/def ::tiles-to-move (s/map-of ::within-board-size (s/coll-of ::tile)))

(s/fdef group-by-direction
        :args (s/cat :direction ::direction :board ::game-board)
        :ret ::tiles-to-move)

(def vertical?  #{::up ::down})

(def horizontal? #{::left ::right})

(defn group-by-direction
  [direction board]
  (cond
    (vertical? direction) (group-by  #(-> % ::position ::x) board)
    (horizontal? direction) (group-by #(-> % ::position ::y) board)))

(s/fdef join-first
        :args (s/cat :tiles (s/and (s/coll-of ::tile) #(< 0 (count %))))
        :ret (s/coll-of ::tile))

(defn join-first
  [tiles]
  (let [[first-tile second-tile] tiles
        new-value (+ (::value first-tile) (::value second-tile))
        new-position (or (::position second-tile) (::position first-tile))
        new-tile {::value new-value ::position new-position}]
    (cons new-tile (drop 2 tiles))))

(s/fdef stack-tiles
        :args (s/cat :direction ::direction :tiles (s/and (s/coll-of ::tile) #(< 0 (count %))))
        :ret (s/coll-of ::tile))

(defn stack-tiles
  [direction tiles]
  (case direction
    ::down (map-indexed (fn [i t] (assoc-in t [::position ::y] (- board-size i 1))) (reverse tiles))
    ::up (map-indexed (fn [i t] (assoc-in t [::position ::y] i)) (reverse tiles))
    ::right (map-indexed (fn [i t] (assoc-in t [::position ::x] (- board-size i 1))) (reverse tiles))
    ::left (map-indexed (fn [i t] (assoc-in t [::position ::x] i)) (reverse tiles))))

(def all-positions (apply concat (for [x (range board-size)]
                           (for [y (range board-size)]
                             {::x x ::y y}))))

(s/fdef random-open-position
        :args (s/cat :board ::game-board)
        :ret ::position)

(defn random-open-position
  [board]
  (let [occupied-positions (into #{} (map ::position) board)
        free-positions (filter (complement occupied-positions) all-positions)]
    (rand-nth free-positions)))

(defn random-tile-value
  []
  (rand-nth '(2 4)))

(s/fdef insert-new-random-tile
        :args (s/cat :board ::game-board)
        :ret ::game-board)

(defn insert-new-random-tile
  [board]
  (conj board {::position (random-open-position board)
               ::value (random-tile-value)}))

(s/fdef move-direction
        :args (s/cat :board ::game-board :direction ::direction)
        :ret ::game-board)

(defn move-direction
  [board direction]
  (->> (group-by-direction direction board)
       (vals)
       (map (partial sort-tiles-by-priority direction))
       (map join-first)
       (mapcat (partial stack-tiles direction))
       (insert-new-random-tile)))


(defn update-state
  [state [event-type & params]]
  (case event-type
    ::move-direction (let [[direction] params] (update state ::game-board #(move-direction % direction)))))

(st/instrument)
