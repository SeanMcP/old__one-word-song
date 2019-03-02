import React from 'react'

import SONGS from 'data/songs.json'

const useSongs = () => {
    const [songIndex, setSongIndex] = React.useState(0)
    const [hasSkipped, setHasSkipped] = React.useState(false)

    function nextSong() {
        if (songIndex + 1 < SONGS.length) {
            setSongIndex(songIndex + 1)
            if (hasSkipped) {
                setHasSkipped(false)
            }
        }
    }

    function skipSong() {
        if (!hasSkipped) {
            nextSong()
            setHasSkipped(true)
        }
    }

    return {
        hasSkipped,
        nextSong,
        skipSong,
        songIndex
    }
}

export default useSongs
