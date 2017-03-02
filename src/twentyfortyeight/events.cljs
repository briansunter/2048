(ns twentyfortyeight.events
  (:require [twentyfortyeight.db :as db]
            [twentyfortyeight.logic :as l]
            [clojure.test.check.generators]
            [cljs.spec.impl.gen :as gen]
            [twentyfortyeight.util :refer [set-item! get-item]]
            [cljs.spec :as s]))

(def event-types #{:initialize-state :move-direction})

(s/def ::type event-types)

(defmulti event-type :type)

(defmethod event-type :initialize-state [_]
  (s/keys :req-un [::type ::db/app-db]))

(defmethod event-type :move-direction [_]
  (s/keys :req-un [::type ::db/direction]))

(defmethod event-type :new-game [_]
  (s/keys :req-un [::type]))

(s/def ::event (s/multi-spec event-type ::type))

(s/fdef update-state
        :args (s/cat :app-db ::db/app-db :event ::event)
        :ret ::db/app-db)

(defmulti update-state (fn [_ e] (e :type)))

(defmethod update-state :initialize-state [state e]
  (:app-db e))

(defmethod update-state :move-direction [state {:keys [direction]}]
  (update state :game-board #(l/move-direction % direction)))

(s/fdef save-state-to-local-storage!
        :args (s/cat :state ::db/app-db))

(defn save-state-to-local-storage!
  [app-db]
  (set-item! ::app-db (.stringify js/JSON (clj->js app-db))))

(s/fdef get-state-from-local-storage
        :ret ::db/app-db)

(defn get-state-from-local-storage
  []
  (s/assert ::db/app-db (js->clj (.parse js/JSON (get-item ::app-db)) :keywordize-keys true)))

(defn gen-initial-state
  []
  (gen/generate (s/gen ::db/app-db)))

(defn get-initial-state
  []
  (or (get-state-from-local-storage)
      (gen-initial-state)))

(defn dispatch-event!
  [event]
  (println "event recieved" event)
  (swap! db/app-db update-state event)
  (save-state-to-local-storage! @db/app-db)
  (s/assert ::db/app-db @db/app-db))
