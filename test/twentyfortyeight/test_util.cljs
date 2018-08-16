(ns twentyfortyeight.test-util
  (:require [cljs.spec.test.alpha :as st]
            [clojure.test :refer [is]]
            [clojure.pprint :as pprint]))

(defn summarize-results' [spec-check]
  (map (comp #(pprint/write % :stream nil) st/abbrev-result) spec-check))

(defn check' [spec-check]
  (is (nil? (-> spec-check first :failure)) (summarize-results' spec-check)))
