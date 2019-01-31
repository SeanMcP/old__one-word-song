import React from 'react'

import { StyledContainer, StyledMain } from './Layout.styled'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'

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
