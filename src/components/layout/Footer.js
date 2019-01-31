import React from 'react'

import { StyledFooter } from './Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
      Made by{' '}
      <a
        href="https://github.com/seanmcp"
        target="_blank"
        rel="noopener noreferrer"
      >
        SeanMcP
      </a>
    </StyledFooter>
  )
}

export default Footer
