(ns twentyfortyeight.events
  (:require [twentyfortyeight.db :as db]
            [twentyfortyeight.logic :as l]
            [clojure.test.check.generators]
            [re-frame.core :as rf]
            [clojure.test.check]
            [cljs.spec.test :as st]
            [twentyfortyeight.util :refer [map-values group-by-single]]
            [cljs.spec.impl.gen :as gen]
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

(rf/reg-sub
 :tiles
 (fn [db _]
   (:game-board db)))

(s/def ::last-position ::db/position)

(s/def ::tile-diff (s/keys :req-un [::db/position ::last-position ::db/value ::db/id]))

(s/def ::game-board-diff (s/coll-of ::tile-diff))

(s/fdef game-board-position-diff
        :args (s/cat :latest-game-board  ::db/game-board
                     :previous-game-board (s/nilable ::db/game-board))
        :ret ::game-board-diff)

(defn- game-board-position-diff
  [latest-game-board previous-game-board]
  (let [previous-positions (map-values :position (group-by-single :id previous-game-board))]
    (map (fn [t] (assoc t :last-position (previous-positions (:id t))))) latest-game-board))


(rf/reg-sub
 :tile-diff
 (fn [db _]
   (let [latest-game-board (:game-board db)
         previous-game-board (first (:previous-game-boards db))]
     (game-board-position-diff latest-game-board previous-game-board))))

(rf/reg-event-db
 :move-direction
 interceptors
 (fn [db [direction]]
   (-> (update db :game-board #(l/move-direction % direction))
       (update :previous-game-boards #(cons (:game-board db) %)))))

(st/instrument)
