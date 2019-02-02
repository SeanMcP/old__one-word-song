import React from 'react'

const useScore = (numberOfTeams = 2, numberOfRounds = 3) => {
  const initialState = {}
  const rounds = generateRoundsObject(numberOfRounds)
  for (let i = 0; i < numberOfTeams; i++) {
    initialState[i] = rounds
  }
  const [score, setScore] = React.useState(initialState)
  const updateScore = (id, round, value) => {
    const teamsCopy = { ...score }
    const roundsCopy = { ...teamsCopy[id] }
    roundsCopy[round] = roundsCopy[round] + value
    teamsCopy[id] = roundsCopy
    setScore(teamsCopy)
  }
  return {
    score,
    updateScore
  }
}

function generateRoundsObject(number) {
  const output = {}
  for (let i = 1; i > number; i++) {
    output[i] = 0
  }
  return output
}

export default useScore
