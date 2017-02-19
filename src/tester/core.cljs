(ns tester.core
  (:require [reagent.core :as reagent]
            [clojure.test.check.generators]
            [cljs.spec.test :as st]
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
(s/def ::direction directions)
(s/def ::position (s/keys :req [::x ::y]))
(s/def ::value (s/with-gen pos-int? (fn [] (s/gen (s/and pos-int? #(< 0 % 10))))))
(s/def ::tile (s/keys :req [::position ::value]))

(s/def ::game-board (s/and
                     (s/coll-of ::tile :max-count (* board-size board-size))
                     #(apply distinct? (map ::position %))))

(def default-board-gen (gen/such-that #(< 0 (count %) board-size) (s/gen ::game-board)))

(s/def ::app-db (s/keys :req [::game-board]))

(defn initial-state
  []
  {::game-board (gen/generate default-board-gen)})


(defonce app-db (reagent/atom (initial-state)))

(s/fdef move-direction
        :args (s/cat :board ::game-board :direction ::direction)
        :ret ::game-board)

(defn tile-comparator
  [direction]
  (fn [tile1 tile2]
    (let [{x1 ::x y1 ::y} (::position tile1)
          {x2 ::x y2 ::y} (::position tile2)]
      (case direction
        ::up (compare y1 y2)
        ::down (compare y2 y1)
        ::right (compare x1 x2)
        ::left (compare x2 x1)))))

(s/fdef sort-tiles-by-priority
        :args (s/cat :direction ::direction :tiles (s/coll-of ::tile))
        :ret (s/coll-of ::tile))

(defn sort-tiles-by-priority
  [direction tiles]
  (sort (tile-comparator direction) tiles))

(s/def ::tiles-to-move (s/map-of ::within-board-size (s/coll-of ::tile)))

(s/fdef group-by-direction
        :args (s/cat :direction ::direction :board ::game-board)
        :ret ::tiles-to-move)

(defn- vertical?
  [direction]
  #{::up ::down})

(defn- horizontal?
  [direction]
  #{::left ::right})

(defn group-by-direction
  [direction board]
  (cond
    (vertical? direction) (group-by  #(-> % ::position ::x) board)
    (horizontal? direction) (group-by #(-> % ::position ::y) board)))

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
        :args (s/cat :board ::game-board :direction ::direction))

(defn shift-in-direction
  [direction row]
  (case
      ::up (map-indexed (fn [idx itm] (update itm ::position #())))
      ::down
      ::left
      ::right
      ))

(defn move-direction
  [board direction]
  (->> (group-by-direction direction board)
       (vals)
       (map (partial sort-tiles-by-priority direction))
       (mapcat join-first)
       #_(mapcat (partial shift-in-direction direction))
       ))

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
  (-> (update position ::x #(* tile-width %))
      (update ::y #(* tile-width %))))

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
                  {x ::x y ::y} (position->coordinates position)]]
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
