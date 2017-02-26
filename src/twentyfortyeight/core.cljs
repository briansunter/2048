(ns twentyfortyeight.core
  (:require [twentyfortyeight.view :as view]))

(defn init! []
  (view/mount-root))
