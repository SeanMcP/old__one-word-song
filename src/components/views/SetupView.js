import React from 'react'

import Layout from '../layout/Layout'

import { StyledLink, StyledLinkContainer } from './SetupView.styled'

const SetupView = () => {
  return (
    <Layout>
      <h2>Let's get the game going!</h2>
      <p>How are we going to play today?</p>
      <StyledLinkContainer>
        <StyledLink to="/play/fun">
          <span>For fun</span>
          <span>2+ Players</span>
        </StyledLink>
        <StyledLink to="/play/teams">
          <span>Teams</span>
          <span>4+ Players</span>
        </StyledLink>
      </StyledLinkContainer>
    </Layout>
  )
}

export default SetupView
