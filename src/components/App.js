import React from 'react'
import { Router } from '@reach/router'
import Layout from './layout/Layout'

const Home = () => <div>Home</div>

const App = () => {
  return (
    <Layout>
      <Router>
        <Home exact path="/" />
      </Router>
    </Layout>
  )
}

export default App
