import React from 'react'

import useGame from 'hooks/useGame'

import SongsContext from 'context/songsContext'

import Layout from 'components/layout/Layout'
import ScoreBoard from 'components/play/ScoreBoard'

const PlayView = props => {
  const { currentTeam, nextTurn, score, updateScore } = useGame()
  const { songs } = React.useContext(SongsContext)
  console.log(songs)

  return (
    <Layout>
      <h2>Play! {props.gameMode}</h2>
      <p>{currentTeam}</p>
      <button onClick={nextTurn}>Next</button>
      <button onClick={() => updateScore(currentTeam, 100)}>+100</button>
      <ScoreBoard
        currentTeam={currentTeam}
        gameMode={props.gameMode}
        score={score}
      />
    </Layout>
  )
}

export default PlayView
