import React from 'react'
import shuffle from 'shuffle-array'

import SONGS from '../data/songs.json'

const SongsContext = React.createContext()

export const SongsProvider = ({ children }) => {
  return (
    <SongsContext.Provider value={{ songs: shuffle(SONGS) }}>
      {children}
    </SongsContext.Provider>
  )
}

export default SongsContext
