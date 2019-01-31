import React from 'react'
import { Router } from '@reach/router'

import DefaultView from './views/DefaultView'
import HomeView from './views/HomeView'

import StyleWrapper from './StyleWrapper'

const App = () => {
  return (
    <StyleWrapper>
      <Router>
        <HomeView exact path="/" />
        <DefaultView default />
      </Router>
    </StyleWrapper>
  )
}

export default App
