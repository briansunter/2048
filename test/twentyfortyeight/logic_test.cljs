(ns twentyfortyeight.logic-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [twentyfortyeight.logic :as l]
            [clojure.pprint :as pprint]
            [cljs.spec.test :as st]))

(defn summarize-results' [spec-check]
  (map (comp #(pprint/write % :stream nil) st/abbrev-result) spec-check))

(defn check' [spec-check]
  (is (nil? (-> spec-check first :failure)) (summarize-results' spec-check)))

(deftest test-move-direction
  (check' (st/check)))
