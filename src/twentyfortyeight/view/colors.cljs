(ns twentyfortyeight.view.colors
  (:require [cljs.spec.alpha :as s]))

(defn- int->hex
  [i]
  (.toString i 16))

(s/fdef pad-right-with
        :args (s/cat :s string? :num-digits pos-int? :pad char?)
        :ret string?)

(defn- pad-right-with
  [s num-digits pad]
  (let [amount-to-pad (- num-digits (.-length s))
        padding (repeat amount-to-pad pad)]
    (clojure.string/join (concat s padding))))

(s/def ::hex-length #(= 6 (.-length %)))

(s/def ::hex-color (s/and string? ::hex-length))

(defn value->color
  [value]
  (str "#" (pad-right-with (int->hex (* 10000 (+ 100 value))) 6 \0)))
