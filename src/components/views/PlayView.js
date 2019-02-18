import React from 'react'

import useGame from 'hooks/useGame'

import GameContext from 'context/gameContext'

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
    updateScore,
    wordIndex
  } = useGame()
  const { songs, words } = React.useContext(GameContext)

  return (
    <Layout>
      <h2>Play! {gameMode}</h2>
      <p>
        <b>Current team</b>: {currentTeam}
      </p>
      <p>
        <b>Song</b>: {songs[songIndex]}
      </p>
      <p>
        <b>Word</b>: {words[wordIndex]}
      </p>
      <button onClick={nextSong}>Next song</button>
      <button onClick={skipSong}>Skip song</button>
      <button onClick={nextTurn}>Next turn</button>
      <button onClick={() => updateScore(currentTeam, 100)}>+100</button>
      <ScoreBoard currentTeam={currentTeam} gameMode={gameMode} score={score} />
    </Layout>
  )
}

export default PlayView
