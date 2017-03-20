(ns twentyfortyeight.events
  (:require [twentyfortyeight.db :as db]
            [twentyfortyeight.logic :as l]
            [re-frame.core :as rf]
            [twentyfortyeight.util :refer [map-values group-by-single]]
            [twentyfortyeight.effects :as effects]
            [cljs.spec :as s]))

(defn check-and-throw
  "throw an exception if db doesn't match the spec"
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))

(def check-spec-interceptor (rf/after (partial check-and-throw ::db/app-db)))

(s/def ::type keyword?)

(def type-of-event first)

(defmulti event-type  type-of-event)

(defmethod event-type :move-direction [_]
  (s/cat :event-type ::type :direction ::db/direction))

(defmethod event-type :initialize [_]
  (s/cat :event-type ::type))

(s/def ::event (s/multi-spec event-type ::type))

(def ->local-store (rf/after effects/save-state-to-local-storage!))

(def interceptors
  [check-spec-interceptor
   ->local-store
   rf/trim-v])

(rf/reg-event-fx
 :initialize
 [(rf/inject-cofx :gen-db) (rf/inject-cofx :local-db)]
 (fn [cofx _]
   {:db (or (:local-db cofx) (:gen-db cofx))}))

(rf/reg-event-fx
 :new-game
 [(rf/inject-cofx :gen-db)]
 (fn [cofx _]
   {:db (:gen-db cofx)}))

(rf/reg-event-db
 :move-direction
 interceptors
 (fn [db [direction]]
   (-> (update db :game-board #(l/move-direction % direction))
       (update :previous-game-boards #(cons (:game-board db) %)))))
