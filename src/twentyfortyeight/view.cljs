(ns twentyfortyeight.view
  (:require [reagent.core :as r]
            [clojure.walk :refer [keywordize-keys]]
            [cljsjs.hammer]
            [re-frame.core :as rf]
            [reanimated.core :as anim]
            [reagent.ratom :as ratom]
            [cljs.spec :as s]
            [cljs.spec.test :as st]
            [twentyfortyeight.events :as e]
            [twentyfortyeight.logic :as l]
            [twentyfortyeight.db :as db]))

(def screen-width (.-innerWidth js/window))
(def screen-height (.-innerHeight js/window))

(def tile-width  (/ (min screen-height screen-width) db/board-size))

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

(s/fdef position->coordinates
        :args (s/cat :position (s/nilable ::db/position)))

(defn axis->coordinates
  [a]
  (* tile-width a))

(defn position->coordinates
  [position]
  (if position
    (-> (update position :x #(* tile-width %))
        (update :y #(* tile-width %)))
    {:x 0 :y 0}))

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
  (some-> hs
          js->clj
          keywordize-keys
          :direction
          hammer-direction->direction
          (#(rf/dispatch [:move-direction %]))))

(defn tile-with-id
  [tile-id]
  (let [tile (rf/subscribe [:tile-with-id tile-id])
        previous-tile (rf/subscribe [:previous-tile-with-id tile-id])
        spring-x (anim/interpolate-to (ratom/reaction (axis->coordinates (get-in @tile [:position :x]))) {:duration 250})
        spring-y (anim/interpolate-to (ratom/reaction (axis->coordinates (get-in @tile [:position :y]))) {:duration 250})]
    (fn
      []
      [:div
       {:key tile-id
        :style {:position "absolute"
                :background-color "orange"
                :border-width 1
                :display "flex"
                :font-color "black"
                :border-style "solid"
                :justify-content"center"
                :align-items "center"
                :font-size 20
                :left @spring-x
                :top @spring-y
                :width tile-width
                :height tile-width}}
       [:a (:value @tile)]])))

(defn game-board
  []
  (let [tile-ids (rf/subscribe [:tile-ids])]
    (fn []
      [:div
       {:style {:display "flex"
                :flex-direction "column"
                :width screen-width
                :height screen-height
                :position "fixed"
                :justify-content "center"
                :align-items "center"}}
       [:button {:on-click #(rf/dispatch [:new-game])} "New Game"]
       (doall (for [tile-id @tile-ids]
                ^{:key tile-id}
                [tile-with-id tile-id]))])))

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
