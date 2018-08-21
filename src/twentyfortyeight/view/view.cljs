(ns twentyfortyeight.view.view
  (:require [reagent.core :as r]
            [clojure.walk :refer [keywordize-keys]]
            [cljsjs.hammer]
            [re-frame.core :as rf]
            [reanimated.core :as anim]
            [reagent.ratom :as ratom]
            [cljs.spec.alpha :as s]
            [cljs.spec.test.alpha :as st]
            [twentyfortyeight.events :as e]
            [twentyfortyeight.logic :as l]
            [twentyfortyeight.view.touch :as touch]
            [twentyfortyeight.view.keyboard :as keyboard]
            [twentyfortyeight.view.colors :as colors]
            [twentyfortyeight.db :as db]))

(def screen-width (min 500 (.-innerWidth js/window)))
(def screen-height (min 500 (.-innerHeight js/window)))

(def tile-width (/ (min screen-height screen-width) db/board-size))

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

(defn movement-spring-from-tile
  [tile axis]
  (-> (get-in @tile [:position axis])
      (axis->coordinates)
      (ratom/reaction)
      (anim/interpolate-to {:duration 250})))

(defn tile-with-id
  [tile-id]
  (let [tile (rf/subscribe [:tile-with-id tile-id])
        previous-tile (rf/subscribe [:previous-tile-with-id tile-id])
        tile-is-new? (rf/subscribe [:tile-is-new? tile-id])
        spring-x (movement-spring-from-tile tile :x)
        spring-y (movement-spring-from-tile tile :y)
        grow-spring (anim/spring (r/atom tile-width) {:from 0})]
    (fn []
      [:div
       {:key tile-id
        :style {:position "absolute"
                :display "flex"
                :font-color "black"
                :justify-content"center"
                ;; :align-items "center"
                :font-size 30
                :left @spring-x
                :margin-top @spring-y
                :width tile-width
                :height tile-width}}
       [:div
        {:style {:background-color (colors/value->color2 (:value @tile))
                 :display :flex
                 :width "100%"
                 :margin "0"
                 :border-style "solid"
                 :border-color "white"
                 :justify-content "center"
                 :align-items "center"
                 :text-align "center"
                 }}
        [:a (:value @tile)]]])))

(defn game-board
  []
  (let [tile-ids (rf/subscribe [:tile-ids])]
    (fn []
      [:div {:style {:display "flex"
             :flex-direction "column"
             :align-items "center"} }
       [:div
        [:button {:style {:height "100px"
                          :border-width 1}
                  :on-click #(rf/dispatch [:new-game])} "New Game"]]
       [:div
       {:style {:display "flex"
                :border-style "solid"
                :flex-direction "column"
                :margin-left (when ( > (.-innerWidth js/window) 500)"25%")
                :width screen-width
                :height screen-height
                :position "fixed"}}

        [:div
       (doall (for [tile-id @tile-ids]
                ^{:key tile-id}
                [tile-with-id tile-id]))]] ])))

(defn game []
  (let [!hammer-manager (r/atom nil)]
    (r/create-class {:reagent-render (fn [_] [game-board])
                     :component-did-mount (fn [this]
                                            (keyboard/watch-keys!)
                                            (reset! !hammer-manager (touch/hammer-manager this)))
                     :component-will-unmount
                     (fn [_]
                       (when-let [mc @!hammer-manager]
                         (touch/destroy-hammer-manager! mc)))})))

(defn mount-root []
  (r/render [game] (.getElementById js/document "app")))
