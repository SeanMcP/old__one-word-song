import React from 'react'

import { StyledUl } from './ScoreBoard.styled'

const teamNames = ['Monkeys', 'Penguins', 'Narwhals', 'Hippos']

const ScoreBoard = ({ currentTeam, gameMode, score }) => {
  const output = []
  for (const id in score) {
    output.push(
      <li key={`team-${id}-score`}>
        <div>The {teamNames[id]}</div>
        <div>{tallyScore(score[id])}</div>
      </li>
    )
  }
  return <StyledUl>{output}</StyledUl>
}

const tallyScore = rounds => rounds.reduce((total, score) => total + score, 0)

export default ScoreBoard
