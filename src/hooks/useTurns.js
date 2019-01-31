import React from 'react'

const useTurn = ({ start = 0, total = 2 }) => {
  const [turn, setTurn] = React.useState(start)
  const nextTurn = () => setTurn(turn + 1 >= total ? 0 : turn + 1)
  return {
    turn,
    nextTurn
  }
}

export default useTurn
