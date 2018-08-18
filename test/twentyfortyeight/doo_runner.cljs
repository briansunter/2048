(ns twentyfortyeight.doo-runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [twentyfortyeight.logic-test]
              [twentyfortyeight.game-test]
              ))

(doo-tests 'twentyfortyeight.logic-test 'twentyfortyeight.game-test)
