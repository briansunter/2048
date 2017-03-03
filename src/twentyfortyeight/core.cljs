(ns twentyfortyeight.core
  (:require [twentyfortyeight.view :as view]
            [twentyfortyeight.db :as db]
            [twentyfortyeight.effects :as effects]
            [twentyfortyeight.events :as events]
            [re-frame.core :as rf]))

(defn init! []
  (rf/dispatch-sync [:initialize])
  (view/mount-root))
