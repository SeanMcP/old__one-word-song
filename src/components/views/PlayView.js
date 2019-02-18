import React from 'react'

import useGame from 'hooks/useGame'

import SongsContext from 'context/songsContext'

import Layout from 'components/layout/Layout'
import ScoreBoard from 'components/play/ScoreBoard'

const PlayView = ({ gameMode }) => {
  const {
    currentTeam,
    nextSong,
    nextTurn,
    score,
    skipSong,
    songIndex,
    updateScore
  } = useGame()
  const { songs } = React.useContext(SongsContext)

  return (
    <Layout>
      <h2>Play! {gameMode}</h2>
      <p>{currentTeam}</p>
      <p>{songs[songIndex]}</p>
      <button onClick={nextSong}>Next song</button>
      <button onClick={skipSong}>Skip song</button>
      <button onClick={nextTurn}>Next turn</button>
      <button onClick={() => updateScore(currentTeam, 100)}>+100</button>
      <ScoreBoard currentTeam={currentTeam} gameMode={gameMode} score={score} />
    </Layout>
  )
}

export default PlayView
