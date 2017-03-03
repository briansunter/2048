(ns twentyfortyeight.logic-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [twentyfortyeight.logic :as l]
            [twentyfortyeight.events :as e]
            [clojure.pprint :as pprint]
            [cljs.spec.test :as st]))

(defn summarize-results' [spec-check]
  (map (comp #(pprint/write % :stream nil) st/abbrev-result) spec-check))

(defn check' [spec-check]
  (is (nil? (-> spec-check first :failure)) (summarize-results' spec-check)))

(deftest test-move-direction
  (check' (st/check 'twentyfortyeight.logic/move-direction)))

(deftest test-all
  (check' (st/check)))

;; (deftest test-update-state
;;   (check' (st/check 'twentyfortyeight.events/update-state)))
