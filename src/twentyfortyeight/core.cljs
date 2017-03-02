(ns twentyfortyeight.core
  (:require [twentyfortyeight.view :as view]
            [twentyfortyeight.events :refer [dispatch-event! get-initial-state]]))

(defn init! []
  (dispatch-event! {:type :initialize-state :app-db (get-initial-state)})
  (view/mount-root))
