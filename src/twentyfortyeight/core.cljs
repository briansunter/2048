(ns twentyfortyeight.core
  (:require [twentyfortyeight.view.view :as view]
            [twentyfortyeight.db]
            [twentyfortyeight.effects]
            [twentyfortyeight.events]
            [twentyfortyeight.subs]
            [re-frisk.core :refer [enable-re-frisk!]]
            [re-frame.core :as rf]))

(defn init! []
  (rf/dispatch-sync [:initialize])
  (enable-re-frisk!)
  (view/mount-root))
