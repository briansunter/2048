(ns twentyfortyeight.view.touch
  (:require [cljsjs.hammer]
            [clojure.walk :refer [keywordize-keys]]
            [re-frame.core :as rf]
            [reagent.core :as r]))

(defn handle-hammer-swipe
  [hs]
  (some-> hs
          js->clj
          keywordize-keys
          :direction
          hammer-direction->direction
          (#(rf/dispatch [:move-direction %]))))

(defn hammer-manager [component]
  (let [mc (new js/Hammer.Manager (r/dom-node component))]
   (js-invoke mc "add" (new js/Hammer.Pan #js{"direction" js/Hammer.DIRECTION_ALL}))
   (js-invoke mc "on" "panend" handle-hammer-swipe)
   mc))

(defn destroy-hammer-manager!
  [hammer-manager]
  (js-invoke hammer-manager "destroy"))

(defn hammer-direction->direction
  [hd]
  (case hd
    2 :left
    4 :right
    8 :up
    16 :down
    nil))
