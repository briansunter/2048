(ns twentyfortyeight.db
  (:require [reagent.core :as r]
            [twentyfortyeight.util :refer [pow-2 log2]]
            [cljs.spec :as s]
            [clojure.test.check.generators]
            [cljs.spec.impl.gen :as gen]))

(def board-size 6)

(def directions #{:up :down :right :left})

(def all-positions (apply concat (for [x (range board-size)]
                                   (for [y (range board-size)]
                                     {:x x :y y}))))

(def position-set-generator (gen/set (gen/elements all-positions) {:min-elements 3}))

(defn game-board-generator
  []
  (gen/fmap
   (partial map (fn [p] {:position p :value (gen/generate (s/gen ::value))}))
   position-set-generator))

(defn all-unique-positions?
  [tiles]
  (apply distinct? (map :position tiles)))

(def max-tiles (* board-size board-size))

(s/def ::game-board
  (s/with-gen
    (s/and (s/coll-of ::tile :max-count max-tiles)
           all-unique-positions?)
    game-board-generator))

(def tile-frequencies (concat (repeat 2 4) (repeat 8 2)))

(defn is-2048-num?
  [n]
  (and (pos-int? n) (mod (log2 n) 1)))

(defn gen-2048
  []
  (gen/fmap
   rand-nth
   (gen/return tile-frequencies)))

(s/def ::value (s/with-gen is-2048-num? gen-2048))
(s/def ::tile (s/keys :req-un [::position ::value]))
(s/def ::within-board-size (s/int-in 0 board-size))
(s/def ::x ::within-board-size)
(s/def ::y ::within-board-size)
(s/def ::direction directions)
(s/def ::position (s/keys :req-un [::x ::y]))

(s/def ::app-db (s/keys :req-un [::game-board]))

(defonce app-db (r/atom (gen/generate (s/gen ::app-db))))
