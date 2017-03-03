(ns twentyfortyeight.events
  (:require [twentyfortyeight.db :as db]
            [twentyfortyeight.logic :as l]
            [clojure.test.check.generators]
            [re-frame.core :as rf]
            [cljs.spec.impl.gen :as gen]
            [twentyfortyeight.util :refer [set-item! get-item]]
            [cljs.spec :as s]))

(defn check-and-throw
  "throw an exception if db doesn't match the spec"
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))

(def check-spec-interceptor (rf/after (partial check-and-throw ::db/app-db)))

(s/def ::type event-types)

(defn type-of-event
  [[et & _]]
  et)

(defmulti event-type  type-of-event)

(defmethod event-type :move-direction [_]
  (s/cat :event-type ::type :direction ::db/direction))

(defmethod event-type :initialize [_]
  (s/cat :event-type ::type))

(s/def ::event (s/multi-spec event-type ::type))

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

(def ->local-store (rf/after save-state-to-local-storage!))

(def interceptors
  [check-spec-interceptor
   ->local-store
   rf/trim-v])

(rf/reg-event-db
 :initialize
 interceptors
 (fn [_ _]
   (get-initial-state)))

(rf/reg-sub
 :tiles
 (fn [db _]
   (:game-board db)))

(rf/reg-event-db
 :move-direction
 interceptors
 (fn [db [_ direction]]
   (update db :game-board #(l/move-direction % direction))))

(defn dispatch-event!
  [event]
  (println "event recieved" event)
  ;; (save-state-to-local-storage! @db/app-db)
  (s/assert ::db/app-db @db/app-db))
