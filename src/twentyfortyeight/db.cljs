(ns twentyfortyeight.db
  (:require [reagent.core :as r]
            [cljs.spec :as s]
            [clojure.test.check.generators]
            [cljs.spec.impl.gen :as gen]
            [twentyfortyeight.logic :as l]))

(def board-size 4)

(def default-board-gen (gen/such-that #(< board-size (count %) (* board-size board-size)) (s/gen ::l/game-board) 1000))

(defn initial-state
  []
  {::l/game-board (gen/generate default-board-gen)})

(defonce app-db (r/atom (initial-state)))

(s/def ::app-db (s/keys :req [::l/game-board]))

(defn dispatch-event!
  [event]
  (swap! app-db l/update-state event)
  (s/assert ::app-db @app-db))
