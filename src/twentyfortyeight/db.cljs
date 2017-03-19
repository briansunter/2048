(ns twentyfortyeight.db
  (:require [reagent.core :as r]
            [twentyfortyeight.util :refer [pow-2 log2]]
            [cljs.spec :as s]
            [clojure.test.check.generators]
            [cljs.spec.impl.gen :as gen]))

(def board-size 5)

(def max-tiles (* board-size board-size))

(def directions #{:up :down :right :left})

(def all-positions (apply concat (for [x (range board-size)]
                                   (for [y (range board-size)]
                                     {:x x :y y}))))

(def position-set-generator (gen/vector (gen/elements all-positions) 2))

(defn game-board-generator
  []
  (gen/fmap
   (partial map (fn [p] {:id (gen/generate (s/gen ::id)) :position p :value (gen/generate (s/gen ::value))}))
   position-set-generator))

(defn all-unique-positions?
  [tiles]
  (apply distinct? (map :position tiles)))

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

(def id-gen #(gen/fmap str (gen/uuid)))

(def previous-game-board-gen #(gen/return []))

(s/def ::value (s/with-gen is-2048-num? gen-2048))
(s/def ::within-board-size (s/int-in 0 board-size))
(s/def ::x ::within-board-size)
(s/def ::y ::within-board-size)
(s/def ::id (s/with-gen string? id-gen))
(s/def ::direction directions)
(s/def ::position (s/keys :req-un [::x ::y]))
(s/def ::tile (s/keys :req-un [::id ::position ::value]))
(s/def ::previous-game-boards (s/with-gen (s/coll-of ::game-board)
                                previous-game-board-gen))
(s/def ::app-db (s/keys :req-un [::game-board ::previous-game-boards]))
