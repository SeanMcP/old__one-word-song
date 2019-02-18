import React from 'react'
import { Router } from '@reach/router'

import DefaultView from 'components/views/DefaultView'
import HomeView from 'components/views/HomeView'
import PlayView from 'components/views/PlayView'
import SetupView from 'components/views/SetupView'

import StyleWrapper from 'components/StyleWrapper'

import { SongsProvider } from 'context/songsContext'

const App = () => {
  return (
    <StyleWrapper>
      <SongsProvider>
        <Router>
          <HomeView exact path="/" />
          <SetupView path="/setup" />
          <PlayView path="/play/:gameMode" />
          <DefaultView default />
        </Router>
      </SongsProvider>
    </StyleWrapper>
  )
}

export default App
