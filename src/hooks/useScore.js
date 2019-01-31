import React from 'react'

const useScore = (numberOfTeams = 2) => {
  const initialState = {}
  for (let i = 0; i < numberOfTeams; i++) {
    initialState[i] = 0
  }
  const [score, setScore] = React.useState(initialState)
  const updateScore = (id, value) => {
    const copy = { ...score }
    copy[id] = copy[id] + value
    setScore(copy)
  }
  return {
    score,
    updateScore
  }
}

export default useScore
