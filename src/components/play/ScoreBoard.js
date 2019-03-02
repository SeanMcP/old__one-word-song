import React from 'react'

import MODES from 'constants/gameModes'

import { StyledLi, StyledUl } from './ScoreBoard.styled'

const teamNames = ['Monkeys', 'Penguins', 'Narwhals', 'Hippos']

const ScoreBoard = ({ currentTeam, gameMode, score }) => {
    if (gameMode === MODES.teams) {
        const output = []
        for (const id in score) {
            output.push(
                <StyledLi
                    key={`team-${id}-score`}
                    isActive={Number(id) === currentTeam}
                >
                    <div>The {teamNames[id]}</div>
                    <div>{tallyScore(score[id])}</div>
                </StyledLi>
            )
        }
        return <StyledUl>{output}</StyledUl>
    } else if (gameMode === MODES.fun) {
        return (
            <StyledUl>
                <StyledLi isActive>
                    <div>Your score</div>
                    <div>{tallyScore(score[0])}</div>
                </StyledLi>
            </StyledUl>
        )
    }
}

const tallyScore = rounds => rounds.reduce((total, score) => total + score, 0)

export default ScoreBoard
