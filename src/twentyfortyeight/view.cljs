(ns twentyfortyeight.view
  (:require [reagent.core :as r]
            [twentyfortyeight.logic :as l]
            [twentyfortyeight.db :as db]))

(def screen-width (.-innerWidth js/window))
(def screen-height (.-innerHeight js/window))

(def board-size 5)

(def tile-width (/ (min screen-height screen-width) board-size))

(def key-code->direction
  {38 ::l/up
   40 ::l/down
   37 ::l/left
   39 ::l/right})

(defn event-for-key [event]
  (let [key-code (.-keyCode event)]
    (when-let [direction (key-code->direction key-code)]
      (db/dispatch-event! [::l/move-direction direction]))))

(defn watch-keys!
  []
  (.addEventListener js/document "keydown" event-for-key))

(defn position->coordinates
  [position]
  (-> (update position ::l/x #(* tile-width %))
      (update ::l/y #(* tile-width %))))

(defn game-board
  []
  (let [game-board (::l/game-board @db/app-db)]
    [:div
     {:style {:display "flex"
              :width screen-width
              :height screen-height
              :position "fixed"
              :x 0
              :y 0
              :justify-content "center"
              :align-items "center"}}
     [:div
      {:style {:display "flex"
               :width (min screen-width screen-height)
               :height (min screen-width screen-height)
               :padding "10%"
               :justify-content "center"
               :align-items "center"}}
      (for [tile game-board
            :let [{:keys [::l/position ::l/value]} tile
                  {x ::l/x y ::l/y} (position->coordinates position)]]
        ^{:key (hash position)}
        [:div {:style {:position "absolute"
                       :background-color "orange"
                       :border-width 1
                       :display "flex"
                       :font-color "black"
                       :border-style "solid"
                       :justify-content"center"
                       :align-items "center"
                       :font-size 20
                       :left x
                       :top y
                       :width tile-width
                       :height tile-width}}
         [:a (str position value)]])]]))

(defn game []
  (r/create-class {:reagent-render (fn [_] [game-board])
                   :component-did-mount (fn [_] (watch-keys!))}))

(defn mount-root []
  (r/render [game] (.getElementById js/document "app")))
