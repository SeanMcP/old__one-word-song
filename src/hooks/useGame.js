// import React from 'react'

import useRounds from './useRounds'
import useScore from './useScore'

const useGame = (rounds = 3) => {
  const ROUNDS = useRounds(rounds)
  const SCORE = useScore()

  return {
    ...ROUNDS,
    ...SCORE
  }
}

export default useGame
