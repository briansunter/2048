(ns twentyfortyeight.core
  (:require [twentyfortyeight.view :as view]
            [twentyfortyeight.events :refer [dispatch-event!]]))

(defn init! []
  (view/mount-root))
