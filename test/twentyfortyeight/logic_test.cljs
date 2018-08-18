(ns twentyfortyeight.logic-test
  (:require [twentyfortyeight.logic :as sut]
            [cljs.spec.alpha :as s]
            [orchestra-cljs.spec.test :as st]
            [cljs.test :as t :include-macros true]))

(st/instrument)

(def board
  '({:id "1" :position {:x 4, :y 1}, :value 2}
    {:id "2",
     :position {:x 3, :y 0}, :value 2}))

(t/deftest test-move-tiles
  (t/testing "down"
    (let [down-board
          '({:id "1"
             :position {:x 4, :y 4}, :value 2}
            {:id "2",
             :position {:x 3, :y 4}, :value 2})]
      (t/is (= down-board (sut/move-and-join board :down)))))

  (t/testing "up"
    (let [up-board
          '({:id "1"
             :position {:x 4, :y 0}, :value 2}
            {:id "2",
             :position {:x 3, :y 0}, :value 2})]
      (t/is (= up-board (sut/move-and-join board :up)))))

  (t/testing "left"
    (let [left-board
          '({:id "1"
             :position {:x 0, :y 1}, :value 2}
            {:id "2",
             :position {:x 0, :y 0}, :value 2})]

      (t/is (clojure.set/subset? (set left-board)
                                 (set (sut/move-and-join board :left))))))
  (t/testing "right"
    (let [right-board
          '({:id "1"
             :position {:x 4, :y 1}, :value 2}
            {:id "2",
             :position {:x 4, :y 0}, :value 2})]

      (t/is (clojure.set/subset? (set right-board)
                                 (set (sut/move-and-join board :right)))))))

(def join-board
  '({:id "1"
     :position {:x 4, :y 1}, :value 2}
    {:id "2",
     :position {:x 4, :y 0}, :value 2}))

(def horiz-join-board
  '({:id "1"
     :position {:x 4, :y 0}, :value 2}
    {:id "2",
     :position {:x 3, :y 0}, :value 2}))

(t/deftest test-join-tiles
  (t/testing "down"
    (let [down-board
          '({:id "1"
             :position {:x 4, :y 4}, :value 4})]
      (t/is (= down-board (sut/move-and-join join-board :down)))))

  (t/testing "up"
    (let [up-board
          '({:id "2" :position {:x 4 :y 0} :value 4})]
      (t/is  (= up-board (sut/move-and-join join-board :up)))))

  (t/testing "left"
    (let [left-board
          '({:id "2" :position {:x 0 :y 0} :value 4})]
      (t/is  (= left-board
                (sut/move-and-join horiz-join-board :left)))))

  (t/testing "right"
    (let [right-board
          '({:id "1" :position {:x 4, :y 0}, :value 4})]
      (t/is  (= right-board (sut/move-and-join horiz-join-board :right))))))

(def multiple-join-board
  '({:id "1"
     :position {:x 4, :y 0}, :value 2}
    {:id "2",
     :position {:x 3, :y 0}, :value 4}
    {:id "3"
     :position {:x 2, :y 0}, :value 4}
    {:id "4",
     :position {:x 1, :y 0}, :value 2}))

(def duplicate-join-board
  '({:id "1"
     :position {:x 4, :y 0}, :value 2}
    {:id "2",
     :position {:x 3, :y 0}, :value 2}
    {:id "3",
     :position {:x 2, :y 0}, :value 2}))

(t/deftest join-multiple
  (let [right-m-join
        '({:id "1"
           :position {:x 4, :y 0}, :value 2}
          {:id "2",
           :position {:x 3, :y 0}, :value 8}
          {:id "4",
           :position {:x 2, :y 0}, :value 2})]
    (t/is (= right-m-join (sut/move-and-join multiple-join-board :right)))))

(sut/join-group  duplicate-join-board)

(t/deftest join-duplicates
  (let [right-d-join
        '({:id "1"
           :position {:x 4, :y 0}, :value 4}
          {:id "3",
           :position {:x 3, :y 0}, :value 2})]
    (t/is (= right-d-join (sut/move-and-join duplicate-join-board :right)))))
