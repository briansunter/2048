(ns twentyfortyeight.core
  (:require [twentyfortyeight.view :as view]
            [twentyfortyeight.db]
            [twentyfortyeight.effects]
            [twentyfortyeight.events]
            [re-frisk.core :refer [enable-re-frisk!]]
            [re-frame.core :as rf]))

(defn init! []
  (rf/dispatch-sync [:initialize])
  (view/mount-root))
