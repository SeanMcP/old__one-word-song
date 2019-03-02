import React from 'react'

import WORDS from 'data/words.json'

const useWords = () => {
    const [wordIndex, setWordIndex] = React.useState(0)

    function nextWord() {
        if (wordIndex + 1 < WORDS.length) {
            setWordIndex(wordIndex + 1)
        }
    }

    return {
        nextWord,
        wordIndex
    }
}

export default useWords
