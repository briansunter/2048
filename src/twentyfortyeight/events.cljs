(ns twentyfortyeight.events
  (:require [twentyfortyeight.db :as db]
            [twentyfortyeight.logic :as l]
            [cljs.spec :as s]))

(defn dispatch-event!
  [event]
  (println "event recieved" event)
  (swap! db/app-db l/update-state event)
  (s/assert ::db/app-db @db/app-db))
