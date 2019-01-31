import React from 'react'
import { Router } from '@reach/router'

import HomeView from './views/HomeView'

const App = () => {
  return (
    <Router>
      <HomeView exact path="/" />
    </Router>
  )
}

export default App
