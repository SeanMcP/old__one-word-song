import React from 'react'
import { animated, useSpring } from 'react-spring'

const FadeIn = ({ children, delay }) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay
  })
  return <animated.span style={styles}>{children}</animated.span>
}

FadeIn.defaultProps = {
  delay: 0
}

export default FadeIn
