(ns twentyfortyeight.events
  (:require [twentyfortyeight.db :as db]
            [twentyfortyeight.logic :as l]
            [cljs.spec :as s]))

(defn update-state
  [state [event-type & params]]
  (case event-type
    :move-direction (let [[direction] params]
                      (update state :game-board #(l/move-direction % direction)))))

(defn dispatch-event!
  [event]
  (println "event recieved" event)
  (swap! db/app-db update-state event)
  (s/assert ::db/app-db @db/app-db))
