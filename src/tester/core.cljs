(ns tester.core
  (:require [reagent.core :as reagent]
            [clojure.test.check.generators]
            [cljs.spec.impl.gen :as gen]
            [cljs.spec :as s]))

(def directions #{::up ::down ::right ::left})

(def board-size 4)

(def screen-width (.-innerWidth js/window))
(def screen-height (.-innerHeight js/window))

(def tile-width (/ (min screen-height screen-width) board-size))
(s/def ::within-board-size (s/int-in 0 board-size))
(s/def ::x ::within-board-size)
(s/def ::y ::within-board-size)
(s/def ::value pos-int?)
(s/def ::direction directions)
(s/def ::position (s/tuple ::within-board-size ::within-board-size))
(s/def ::tile (s/keys :req [::value]))
(s/def ::game-board (s/map-of ::position ::tile :max-count (* board-size board-size) :min-count 2))
(s/def ::app-db (s/keys :req [::game-board ::direction]))

(defn initial-state
  []
  (gen/generate (s/gen ::app-db)))

(defonce app-db (reagent/atom (initial-state)))

(s/fdef move-direction
        :args (s/cat :board ::game-board :direction ::direction)
        :ret ::game-board)

(defn move-direction
  [board direction]
  (gen/generate (s/gen ::game-board)))

(defn correct-number-of-positions?
  [current-position direction-to-move]

  )

(s/fdef positions-to-move
        :args (s/cat :current-position ::position
                     :move-direction ::direction)
        :ret (s/coll-of ::position))



(defn positions-to-move
  [[x y] move-direction]
  (case move-direction
    ::up (map (fn [yy] [x yy]) (reverse (range 0 y))))
  )

(defn update-state
  [state [event-type & params]]
  (case event-type
    ::move-direction (let [[direction] params] (update state ::game-board #(move-direction % directions)))))

(defn dispatch-event!
  [event]
  (swap! app-db update-state event))

(def key-code->direction
  {38 ::up
   40 ::down
   37 ::left
   39 ::right})

(defn event-for-key [event]
  (let [key-code (.-keyCode event)]
    (when-let [direction (key-code->direction key-code)]
      (dispatch-event! [::move-direction direction]))))

(defn watch-keys!
  []
  (.addEventListener js/document "keydown" event-for-key))

(defn position->coordinates
  [position]
  (into [] (map #(* tile-width %)) position))

(defn game-board
  []
  (let [game-board (::game-board @app-db)]
    [:div
     {:style {:display "flex"
              :width screen-width
              :height screen-height
              :justify-content "center"
              :align-items "center"}}
    [:div
     {:style {:display "flex"
              :width (min screen-width screen-height)
              :height (min screen-width screen-height)
              :padding "10%"
              :justify-content "center"
              :align-items "center"}}
     (for [location game-board
           :let [[position tile] location
                 [x y] (position->coordinates position)]]
       ^{:key (hash location)}
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
                      :height tile-width
                      }}[:a (::value tile)]])]]))

(defn game []
  (reagent/create-class {:reagent-render (fn [_] [game-board])
                   :component-did-mount (fn [_] (watch-keys!))}))

(defn home-page []
  [:div "TEST"])

(defn mount-root []
  (reagent/render [game] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
