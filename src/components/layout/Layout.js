import React from 'react'

import { StyledContainer, StyledMain } from './Layout.styled'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, hideFooter, hideHeader }) => {
  return (
    <StyledContainer>
      {!hideHeader && <Header />}
      <StyledMain>{children}</StyledMain>
      {!hideFooter && <Footer />}
    </StyledContainer>
  )
}

export default Layout
