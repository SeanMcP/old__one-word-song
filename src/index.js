import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.css'
import App from 'components/App'
import * as serviceWorker from 'serviceWorker'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
