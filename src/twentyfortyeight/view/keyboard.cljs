(ns twentyfortyeight.view.keyboard
  (:require [re-frame.core :as rf]))

(def key-code->direction
  {38 :up
   40 :down
   37 :left
   39 :right})

(defn event-for-key [event]
  (let [key-code (.-keyCode event)]
    (when-let [direction (key-code->direction key-code)]
      (rf/dispatch [:move-direction direction]))))

(defn watch-keys!
  []
  (.addEventListener js/document "keydown" event-for-key))
