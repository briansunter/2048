(ns twentyfortyeight.logic-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [twentyfortyeight.logic ]
            [twentyfortyeight.events :as e]
            [twentyfortyeight.effects]
            [twentyfortyeight.view.view]
            [twentyfortyeight.subs]
            [twentyfortyeight.test-util :refer [check']]
            [cljs.spec.test.alpha :as st]))

(deftest test-all
  (check' (st/check)))

(deftest test-move-direction
  (check' (st/check `e/update-db-with-direction)))
