import useRounds from './useRounds'
import useScore from './useScore'
import useSongs from './useSongs'

const useGame = (rounds = 3) => {
  const ROUNDS = useRounds(rounds)
  const SCORE = useScore()
  const SONGS = useSongs()

  return {
    ...ROUNDS,
    ...SCORE,
    ...SONGS
  }
}

export default useGame
