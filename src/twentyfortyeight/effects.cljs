(ns twentyfortyeight.effects
  (:require [re-frame.core :as rf]
            [twentyfortyeight.db :as db]
            [clojure.test.check.generators]
            [cljs.spec.impl.gen :as gen]
            [cljs.spec :as s]))

(defn set-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn get-item
  "Returns value of `key' from browser's localStorage."
  [key]
  (.getItem (.-localStorage js/window) key))

(defn remove-item!
  "Remove the browser's localStorage value for the given `key`"
  [key]
  (.removeItem (.-localStorage js/window) key))

(defn gen-initial-state
  []
  (gen/generate (s/gen ::db/app-db)))

(s/fdef get-state-from-local-storage
        :ret ::db/app-db)

(defn get-state-from-local-storage
  []
  (->> (get-item ::app-db)
       (.parse js/JSON)
       (#(js->clj % :keywordize-keys true))
       (s/assert ::db/app-db)))

(s/fdef save-state-to-local-storage!
        :args (s/cat :state ::db/app-db))

(defn save-state-to-local-storage!
  [app-db]
  (->> (clj->js app-db)
       (.stringify js/JSON)
       (set-item! ::app-db)))

(rf/reg-cofx
 :gen-db
 (fn [coeffects _]
   (assoc coeffects :gen-db (gen-initial-state))))

(rf/reg-cofx
 :local-db
 (fn [coeffects ]
   (assoc coeffects :local-db (get-state-from-local-storage))))

(rf/reg-cofx
 :uuid
 (fn [coeffects ]
   (assoc coeffects :uuid (str (random-uuid)))))
