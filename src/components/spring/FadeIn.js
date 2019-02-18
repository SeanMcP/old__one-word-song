import React from 'react'
import { animated, useSpring } from 'react-spring'

const FadeIn = ({ children, delay = 0 }) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay
  })
  return <animated.span style={styles}>{children}</animated.span>
}

export default FadeIn
