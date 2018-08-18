(ns twentyfortyeight.game-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [twentyfortyeight.logic ]
            [twentyfortyeight.events :as e]
            [twentyfortyeight.effects]
            [twentyfortyeight.view.view]
            [twentyfortyeight.subs]
            [twentyfortyeight.test-util :refer [check']]
            [cljs.spec.test.alpha :as st]
            [orchestra-cljs.spec.test :as stc]))

#_(deftest test-all
  (check' (st/check)))

(stc/instrument)

(deftest test-move-direction
  (check' (st/check `e/update-db-with-direction)))
