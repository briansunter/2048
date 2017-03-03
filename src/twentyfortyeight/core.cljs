(ns twentyfortyeight.core
  (:require [twentyfortyeight.view :as view]
            [re-frame.core :as rf]))

(defn init! []
  (rf/dispatch-sync [:initialize])     ;; puts a value into application state
  (view/mount-root))
