import React from 'react'
import shuffle from 'shuffle-array'

import SONGS from '../data/songs.json'
import WORDS from '../data/words.json'

const GameContext = React.createContext()

export const GameProvider = ({ children }) => {
    return (
        <GameContext.Provider
            value={{ songs: shuffle(SONGS), words: shuffle(WORDS) }}
        >
            {children}
        </GameContext.Provider>
    )
}

export default GameContext
