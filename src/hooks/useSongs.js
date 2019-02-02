import React from 'react'
import shuffle from 'shuffle-array'

const songArray = [
  'Twinkle Twinkle Little Star',
  'Bohemian Rhapsody',
  'Ice Ice Baby'
]

const useSongs = () => {
  const [songs] = React.useState(shuffle(songArray))
  return { songs }
}

export default useSongs
