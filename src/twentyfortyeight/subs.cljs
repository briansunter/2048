(ns twentyfortyeight.subs
  (:require [twentyfortyeight.db :as db]
            [re-frame.core :as rf]
            [cljs.spec :as s]))

(rf/reg-sub
 :tile-ids
 (fn [db _]
   (map :id (:game-board db))))

(rf/reg-sub
 :tile-with-id
 (fn [db [_ tile-id]]
   (first (filter #(= tile-id (:id %)) (:game-board db)))))

(rf/reg-sub
 :previous-tile-with-id
 (fn [db [_ tile-id]]
   (first (filter #(= tile-id (:id %)) (first (:previous-game-boards db))))))

(rf/reg-sub
 :tile-at-position
 (fn [db [_ position]]
   (first (filter #(= position (:position %)) (:game-board db)))))

(defn tile-with-id
  [tile-id game-board]
  (first (filter #(= tile-id (:id %)) game-board)))

(s/fdef tile-is-new?
        :args (s/cat :tile-id ::db/id
                     :game-board ::db/game-board
                     :previous-game-board ::db/game-board)
        :ret (s/nilable boolean?))

(defn tile-is-new?
  [tile-id game-board previous-game-board]
  (let [in-current-board? (tile-with-id tile-id game-board)
        in-previous-board? (tile-with-id tile-id previous-game-board)]
    (and in-previous-board? (not in-current-board?))))

(rf/reg-sub
 :tile-is-new?
 (fn [db [_ tile-id]]
   (tile-is-new? tile-id (:game-board db) (first (:previous-game-boards db)))))
