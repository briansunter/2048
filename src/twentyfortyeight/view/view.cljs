(ns twentyfortyeight.view.view
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
            [twentyfortyeight.view.touch :as touch]
            [twentyfortyeight.view.keyboard :as keyboard]
            [twentyfortyeight.db :as db]))

(def screen-width (.-innerWidth js/window))
(def screen-height (.-innerHeight js/window))

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

(defn spring-from-tile
  [tile axis]
  (-> (get-in @tile [:position axis])
      (axis->coordinates)
      (ratom/reaction)
      (anim/interpolate-to {:duration 250})))

(defn int->hex
  [i]
  (.toString i 16))

(s/fdef pad-right-with
         :args (s/cat :s string? :num-digits pos-int? :pad char?)
         :ret string?)

(defn pad-right-with
  [s num-digits pad]
  (let [amount-to-pad (- num-digits (.-length s))
        padding (repeat amount-to-pad pad)]
    (clojure.string/join (concat s padding))))

(defn value->color
  [value]
  (str "#" (pad-right-with (int->hex (* 10001 value)) 6 \0)))

(defn tile-with-id
  [tile-id]
  (let [tile (rf/subscribe [:tile-with-id tile-id])
        spring-x (spring-from-tile tile :x)
        spring-y (spring-from-tile tile :y)]
    (fn []
      [:div
       {:key tile-id
        :style {:position "absolute"
                :background-color (value->color (:value @tile))
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
                :width screen-width
                :height screen-height
                :position "fixed"}}
       [:button {:on-click #(rf/dispatch [:new-game])} "New Game"]
       (doall (for [tile-id @tile-ids]
                ^{:key tile-id}
                [tile-with-id tile-id]))])))

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
