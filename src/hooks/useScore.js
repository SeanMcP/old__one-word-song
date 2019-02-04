import React from 'react'

const useScore = () => {
  const initialState = {
    0: [],
    1: []
  }
  const [score, setScore] = React.useState(initialState)
  const updateScore = (id, value) => {
    const copy = { ...score }
    copy[id].push(value)
    setScore(copy)
  }
  return {
    score,
    updateScore
  }
}

export default useScore
