(ns twentyfortyeight.util)

(defn log2 [n]
  (* (.log js/Math n) (.-LOG2E js/Math)))

(defn pow-2
  [n]
  (.pow js/Math 2 n))

(defn map-values [f m]
  (into {} (for [[k v] m] [k (f v)])))

(defn group-by-single
  [f c]
  (map-values first (group-by f c)))
