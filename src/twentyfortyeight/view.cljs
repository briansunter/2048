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

(s/fdef spring-from-position-diff
        :args (s/cat :position-diff ::e/position-diff))

(defn game-board
  []
  (let [tile-diffs (rf/subscribe [:tile-diff])]
    [:div
     {:style {:display "flex"
              :flex-direction "column"
              :width screen-width
              :height screen-height
              :position "fixed"
              :justify-content "center"
              :align-items "center"}}
     [:button {:on-click #(rf/dispatch [:new-game])} "New Game"]
     (doall (for [tile @tile-diffs
                  :let [{:keys [:value :position :last-position :id]} tile
                        {:keys [:x :y]} (position->coordinates position)
                        {last-x :x last-y :y} (position->coordinates last-position)
                        x-spring (anim/interpolate-to (r/atom x) {:from last-x})
                        y-spring (anim/interpolate-to (r/atom y) {:from last-y})
                        _ (println value last-x x last-y y)]]
              ^{:key (:id tile)}
              [:div {:style {:position "absolute"
                             :background-color "orange"
                             :border-width 1
                             :display "flex"
                             :font-color "black"
                             :border-style "solid"
                             :justify-content"center"
                             :align-items "center"
                             :font-size 20
                             :left @x-spring
                             :top @y-spring
                             :width tile-width
                             :height tile-width}}
               [:a (str value)]]))]))

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

(st/instrument)
