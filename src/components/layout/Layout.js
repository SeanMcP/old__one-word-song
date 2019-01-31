import React from 'react'

import { StyledContainer, StyledMain } from './Layout.styled'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledContainer>
  )
}

export default Layout
