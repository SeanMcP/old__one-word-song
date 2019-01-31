import React from 'react'
import { Router } from '@reach/router'

import DefaultView from './views/DefaultView'
import HomeView from './views/HomeView'

const App = () => {
  return (
    <Router>
      <HomeView exact path="/" />
      <DefaultView default />
    </Router>
  )
}

export default App
