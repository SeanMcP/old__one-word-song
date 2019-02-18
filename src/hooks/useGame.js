import useRounds from './useRounds'
import useScore from './useScore'
import useSongs from './useSongs'
import useWords from './useWords'

const useGame = (rounds = 3) => {
  const ROUNDS = useRounds(rounds)
  const SCORE = useScore()
  const SONGS = useSongs()
  const WORDS = useWords()

  return {
    ...ROUNDS,
    ...SCORE,
    ...SONGS,
    ...WORDS
  }
}

export default useGame
