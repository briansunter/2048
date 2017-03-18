(ns twentyfortyeight.logic-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [twentyfortyeight.logic ]
            [twentyfortyeight.events]
            [twentyfortyeight.effects]
            [twentyfortyeight.view.view]
            [twentyfortyeight.test-util :refer [check']]
            [cljs.spec.test :as st]))

(deftest test-all
  (check' (st/check)))
