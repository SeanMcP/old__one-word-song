import React from 'react'
import PropTypes from 'prop-types'

const PlayPhase = ({
    correctGuess,
    currentSong,
    currentWord,
    hasSkipped,
    next,
    skipSong
}) => {
    return (
        <div>
            <p>
                <b>Song</b>: “{currentSong}”
            </p>
            <button onClick={skipSong} disabled={hasSkipped}>
                Skip song
            </button>
            <p>
                <b>Word</b>: {currentWord}
            </p>
            <button onClick={next}>Next turn</button>
            <button onClick={correctGuess}>Correct!</button>
        </div>
    )
}

PlayPhase.propTypes = {
    correctGuess: PropTypes.func.isRequired,
    currentSong: PropTypes.string.isRequired,
    currentWord: PropTypes.string.isRequired,
    hasSkipped: PropTypes.bool.isRequired,
    next: PropTypes.func.isRequired,
    skipSong: PropTypes.func.isRequired
}

export default PlayPhase
