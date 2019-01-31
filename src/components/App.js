import React from 'react'

import { StyledContainer, StyledMain } from './App.styled'
import Footer from './layout/Footer'
import Header from './layout/Header'

const App = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>Hello!</StyledMain>
      <Footer />
    </StyledContainer>
  )
}

export default App
