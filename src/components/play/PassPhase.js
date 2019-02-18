import React from 'react'
import PropTypes from 'prop-types'

const PassPhase = ({ next }) => {
  return (
    <div>
      <p>Pass to the next player</p>
      <button onClick={next}>Ready?</button>
    </div>
  )
}

PassPhase.propTypes = {
  next: PropTypes.func.isRequired
}

export default PassPhase
