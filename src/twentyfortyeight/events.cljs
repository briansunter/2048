(ns twentyfortyeight.events
  (:require [twentyfortyeight.db :as db]
            [twentyfortyeight.logic :as l]
            [twentyfortyeight.util :refer [set-item! get-item]]
            [cljs.spec :as s]))

(def event-types #{:initialize-state :move-direction})

(s/def ::type event-types)

(defmulti event-type :type)

(defmethod event-type :initialize-state [_]
  (s/keys :req-un [::type ::db/app-db]))

(defmethod event-type :move-direction [_]
  (s/keys :req-un [::type ::db/direction]))

(s/def ::event (s/multi-spec event-type ::type))

(s/fdef update-state
        :args (s/cat :state ::db/app-db :event ::event)
        :ret ::db/app-db)

(defmulti update-state (fn [_ e] (e :type)))

(defmethod update-state :initialize-state [state e]
 state)

(defmethod update-state :move-direction [state {:keys [direction]}]
  (update state :game-board #(l/move-direction % direction)))

(s/fdef save-state-to-local-storage!
        :args (s/cat :state ::db/app-db))

(defn save-state-to-local-storage!
  [app-db]
  (set-item! ::app-db app-db))

(defn dispatch-event!
  [event]
  (println "event recieved" event)
  (swap! db/app-db update-state event)
  (save-state-to-local-storage! @db/app-db)
  (s/assert ::db/app-db @db/app-db))
