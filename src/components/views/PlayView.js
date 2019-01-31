import React from 'react'

import useScore from 'hooks/useScore'
import useTurns from 'hooks/useTurns'

import Layout from 'components/layout/Layout'
import ScoreBoard from 'components/play/ScoreBoard'

const PlayView = props => {
  const { score, updateScore } = useScore()
  const { turn, nextTurn } = useTurns({})
  return (
    <Layout>
      <h2>Play! {props.gameMode}</h2>
      <p>{turn}</p>
      <button onClick={nextTurn}>Next</button>
      <ScoreBoard gameMode={props.gameMode} score={score} />
    </Layout>
  )
}

export default PlayView
