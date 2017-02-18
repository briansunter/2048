(ns tester.core
  (:require [reagent.core :as reagent]
            [clojure.test.check.generators]
            [cljs.spec.test :as st]
            [cljs.spec.impl.gen :as gen]
            [cljs.spec :as s]))

(def directions #{::up ::down ::right ::left})

(def board-size 6)

(def screen-width (.-innerWidth js/window))
(def screen-height (.-innerHeight js/window))

(def tile-width (/ (min screen-height screen-width) board-size))

(s/def ::within-board-size (s/int-in 0 board-size))
(s/def ::x ::within-board-size)
(s/def ::y ::within-board-size)
(s/def ::direction directions)
(s/def ::position (s/tuple ::within-board-size ::within-board-size))
(s/def ::value pos-int?)
(s/def ::tile (s/keys :req [::position ::value]))

(s/def ::game-board (s/coll-of ::tile :max-count (* board-size board-size) :min-count 2))
(s/def ::app-db (s/keys :req [::game-board ::direction]))

(defn initial-state
  []
  (gen/generate (s/gen ::app-db)))

(defonce app-db (reagent/atom (initial-state)))

(defn dec*
  [foo]
  (if (<= 1 foo)
    (dec foo)
    0))

(s/fdef positions-to-move
        :args (s/cat :current-position ::position
                     :move-direction ::direction)
        :ret (s/coll-of ::position))

(defn positions-to-move
  [[x y] direction]
  (case direction
    ::up    (map (fn [new-y] [x new-y]) (range (inc y) board-size))
    ::down  (map (fn [new-y] [x new-y]) (reverse (range (dec* y))))
    ::right (map (fn [new-x] [new-x y]) (range (inc x) board-size))
    ::left  (map (fn [new-x] [new-x y]) (reverse (range (dec* x))))))

(s/fdef next-position
        :args (s/cat :board ::game-board :positions-to-check (s/coll-of ::position))
        :ret ::position)

(defn next-position
  [board direction position]
  #_(let postitions-to-check []
         (or (first (filter board positions-to-check)) (last positions-to-check))))

(s/def ::position-board (s/map-of ::position (s/coll-of ::position)))

(s/fdef board->position-board
        :args (s/cat :board ::game-board :direction ::direction)
        :ret ::position-board)

(defn board->position-board
  [board direction]
  (zipmap (keys board) (map #(positions-to-move % direction) (keys board))))

(s/fdef move-direction
        :args (s/cat :board ::game-board :direction ::direction)
        :ret ::game-board)


(defn tile-comparator
  [direction]
  (fn [tile1 tile2]
    (let [[x1 y1] (::position tile1)
          [x2 y2] (::position tile2)]
      (case direction
        ::up (< y1 y2)
        ::down (> y1 y2)
        ::right (< x1 x2)
        ::left (> x1 x2)))))

(s/fdef sort-tiles-by-priority
        :args (s/cat :direction ::direction :tiles (s/coll-of ::tile))
        :ret (s/coll-of ::tile))

(defn sort-tiles-by-priority
  [direction tiles]
  (sort-by (tile-comparator direction) tiles))

;; (defn move-tile
;;   [board direction position]
;;   (let [new-position ]))

(s/def ::tiles-to-move (s/map-of ::within-board-size (s/coll-of ::tile)))

(s/fdef group-by-direction
        :args (s/cat :direction ::direction :board ::game-board)
        :ret ::tiles-to-move)

(defn group-by-direction
  [direction board]
  (group-by #(-> % ::position second) board)
  #_(cond
    (#{::up ::down} direction)
    (#{::right ::left} direction) (group-by #(-> % ::position first) board)))

(st/check `group-by-direction)
#_(first (s/exercise-fn `group-by-direction))

(s/fdef join-first
        :args (s/cat :tiles (s/and (s/coll-of ::tile) #(< 0 (count %))))
        :ret (s/coll-of ::tile))

(defn join-first
  [tiles]
  (let [[first-tile second-tile] tiles
        new-value (+ (::value first-tile) (::value second-tile))
        new-position (or (::position second-tile) (::position first-tile))
        new-tile {::value new-value ::position new-position}]
    (cons new-tile (drop 2 tiles))))

(s/fdef move-direction
        :args (s/cat :board ::game-board :direction ::direction)
        :ret ::game-board)

(defn move-direction
  [board direction]
  (->> (group-by-direction direction board)
       vals
       #_(map (partial sort-tiles-by-priority direction))
       #_(mapcat join-first)
       ))

#_(st/check `move-direction)
#_(second (first (s/exercise-fn `move-direction)))

(defn update-state
  [state [event-type & params]]
  (case event-type
    ::move-direction (let [[direction] params] (update state ::game-board #(move-direction % direction)))))

(defn dispatch-event!
  [event]
  (swap! app-db update-state event)
  (println @app-db)
  (s/assert ::app-db @app-db)  )

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
      (for [tile game-board
            :let [{:keys [::position ::value]} tile
                  [x y] (position->coordinates position)]]
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
                       :bottom y
                       :width tile-width
                       :height tile-width
                       }}[:a (str position value)]])]]))

(defn game []
  (reagent/create-class {:reagent-render (fn [_] [game-board])
                         :component-did-mount (fn [_] (watch-keys!))}))

(defn home-page []
  [:div "TEST"])

(defn mount-root []
  (reagent/render [game] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(st/instrument)
