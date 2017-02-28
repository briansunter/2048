(ns twentyfortyeight.view
  (:require [reagent.core :as r]
            [clojure.walk :refer [keywordize-keys]]
            [twentyfortyeight.events :refer [dispatch-event!]]
            [cljsjs.hammer]
            [twentyfortyeight.logic :as l]
            [twentyfortyeight.db :as db]))

(def screen-width (.-innerWidth js/window))
(def screen-height (.-innerHeight js/window))

(def board-size 6)

(def tile-width (* .8 (/ (min screen-height screen-width) board-size)))

(def key-code->direction
  {38 :up
   40 :down
   37 :left
   39 :right})

(defn event-for-key [event]
  (let [key-code (.-keyCode event)]
    (when-let [direction (key-code->direction key-code)]
      (dispatch-event! [:move-direction direction]))))

(defn watch-keys!
  []
  (.addEventListener js/document "keydown" event-for-key))

(defn position->coordinates
  [position]
  (-> (update position :x #(* tile-width %))
      (update :y #(* tile-width %))))

(defn hammer-direction->direction
  [hd]
  (case hd
    2 :left
    4 :right
    8 :up
    16 :down
    nil))

(defn handle-hammer-swipe
  [hs]
  (if-let [direction (some-> hs
                             js->clj
                             keywordize-keys
                             :direction
                             hammer-direction->direction
                             )]
    (do
      (dispatch-event! [:move-direction direction])
      )))


(defn game-board
  []
  (let [game-board (:game-board @db/app-db)
        ]
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
      (for [tile game-board
            :let [{:keys [:position :value]} tile
                  {x :x y :y} (position->coordinates position)]]
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
         [:a (str value)]])]]))

(defn game []
  (let [!hammer-manager (r/atom nil)]
    (r/create-class {:reagent-render (fn [_] [game-board])
                     :component-did-mount (fn [this]
                                            (let [mc (new js/Hammer.Manager (r/dom-node this))]
                                              (js-invoke mc "add" (new js/Hammer.Pan #js{"direction" js/Hammer.DIRECTION_ALL}))
                                              (js-invoke mc "on" "panend" handle-hammer-swipe)
                                              (watch-keys!)
                                              (reset! !hammer-manager mc)))

                     :component-will-unmount
                     (fn [_]
                       (when-let [mc @!hammer-manager]
                         (js-invoke mc "destroy")))})))

(defn mount-root []
  (r/render [game] (.getElementById js/document "app")))
