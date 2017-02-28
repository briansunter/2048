(ns twentyfortyeight.util)

(defn log2 [n]
  (* (.log js/Math n) (.-LOG2E js/Math)))

(defn pow-2
  [n]
  (.pow js/Math 2 n))
