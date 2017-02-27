(ns twentyfortyeight.db
  (:require [reagent.core :as r]
            [cljs.spec :as s]
            [clojure.test.check.generators]
            [cljs.spec.impl.gen :as gen]
            [twentyfortyeight.logic :as l]))

(def board-size 10)

(s/def ::app-db (s/keys :req [::l/game-board]))

(defonce app-db (r/atom (gen/generate (s/gen ::app-db))))

(defn dispatch-event!
  [event]
  (println "event recieved" event)
  (swap! app-db l/update-state event)
  (s/assert ::app-db @app-db))
