import React from 'react'

import { StyledUl } from './ScoreBoard.styled'

const teamNames = ['Monkeys', 'Penguins', 'Narwhals', 'Hippos']

const ScoreBoard = ({ gameMode, score }) => {
    const output = []
    for (const team in score) {
        output.push(
            <li key={`team-${team}-score`}>
                <div>The {teamNames[team]}</div>
                <div>{score[team]}</div>
            </li>
        )
    }
  return <StyledUl>{output}</StyledUl>
}

export default ScoreBoard
