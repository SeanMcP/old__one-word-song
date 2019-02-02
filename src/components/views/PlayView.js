import React from 'react'

import useScore from 'hooks/useScore'
import useSongs from 'hooks/useSongs'
import useTurns from 'hooks/useTurns'

import Layout from 'components/layout/Layout'
import ScoreBoard from 'components/play/ScoreBoard'

const PlayView = props => {
  const { score, updateScore } = useScore()
  const { turn, nextTurn } = useTurns({})
  const { songs } = useSongs()

  return (
    <Layout>
      <h2>Play! {props.gameMode}</h2>
      {/* <p>{turn}</p> */}
      <button onClick={() => updateScore(0, 1, 100)}>+100</button>
      <ScoreBoard gameMode={props.gameMode} score={score} />
    </Layout>
  )
}

export default PlayView
