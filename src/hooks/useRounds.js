import React from 'react'

const useRounds = rounds => {
    const maxRounds = rounds * 2
    const [round, setRound] = React.useState(0)
    const nextTurn = () => setRound(round + 1)

    return {
        round,
        nextTurn,
        isLastRound: round >= maxRounds - 2,
        isOver: round === maxRounds,
        currentTeam: round % 2
    }
}

export default useRounds
