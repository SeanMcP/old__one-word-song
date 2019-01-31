import React from 'react'
import { Router } from '@reach/router'

import DefaultView from 'components/views/DefaultView'
import HomeView from 'components/views/HomeView'
import SetupView from 'components/views/SetupView'

import StyleWrapper from 'components/StyleWrapper'

const App = () => {
  return (
    <StyleWrapper>
      <Router>
        <HomeView exact path="/" />
        <SetupView exact path="/setup" />
        <DefaultView default />
      </Router>
    </StyleWrapper>
  )
}

export default App
