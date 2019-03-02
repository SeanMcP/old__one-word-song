// import React from 'react'
import { useSpring } from 'react-spring'

const useTimer = (duration = 1500) => {
    const percent = useSpring({ from: 0, to: 100, duration })
    return percent
}

export default useTimer
