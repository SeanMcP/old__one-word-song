import React from 'react'

const initialState = {
    turn: 0
}

function gameReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_TURN':
            return {
                ...state,
                turn: state.turn + 1
            }
        default:
            return state
    }
}

function useGameReducer() {
    return React.useReducer(gameReducer, initialState)
}

export default useGameReducer
