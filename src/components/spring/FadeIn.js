import React from 'react'
import { Spring } from 'react-spring'

const FadeIn = ({ children, delay }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={delay}>
      {spring => <span style={spring}>{children}</span>}
    </Spring>
  )
}

FadeIn.defaultProps = {
  delay: 0
}

export default FadeIn
