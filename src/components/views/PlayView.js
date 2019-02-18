import React from 'react'

import useGame from 'hooks/useGame'

import GameContext from 'context/gameContext'

import Layout from 'components/layout/Layout'
import PassPhase from 'components/play/PassPhase'
import PlayPhase from 'components/play/PlayPhase'
import ScoreBoard from 'components/play/ScoreBoard'

const PlayView = ({ gameMode }) => {
  const [passPhase, setPassPhase] = React.useState(false)
  const {
    currentTeam,
    hasSkipped,
    nextSong,
    nextTurn,
    nextWord,
    score,
    skipSong,
    songIndex,
    updateScore,
    wordIndex
  } = useGame()
  const { songs, words } = React.useContext(GameContext)

  function next() {
    setPassPhase(false)
    nextTurn()
    nextSong()
    nextWord()
  }

  function correctGuess() {
    updateScore(currentTeam, 100)
    setPassPhase(true)
  }

  return (
    <Layout>
      <h2>Play! {gameMode}</h2>
      {passPhase ? (
        <PassPhase next={next} />
      ) : (
        <PlayPhase
          correctGuess={correctGuess}
          currentSong={songs[songIndex]}
          currentWord={words[wordIndex]}
          hasSkipped={hasSkipped}
          next={next}
          skipSong={skipSong}
        />
      )}
      <ScoreBoard currentTeam={currentTeam} gameMode={gameMode} score={score} />
    </Layout>
  )
}

export default PlayView
