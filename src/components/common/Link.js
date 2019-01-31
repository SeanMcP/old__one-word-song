import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const StyledLink = styled(Link)`
  border: 1px solid ${p => p.theme.primary};
  border-radius: 0.25rem;
  color: ${p => p.theme.primary};
  display: ${p => p.display};
  padding: 0.5rem 1rem;
  position: relative;
  text-decoration: none;
  
  &, ::after {
    transition: all 100ms ease-in-out;
  }

  ::after {
    background: ${p => p.theme.primary};
    bottom: 0;
    content: '';
    height: 0%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  &:hover {
    color: white;

    ::after {
        height: 100%;
    }
  }
`

const _Link = props => {
  return <StyledLink {...props} />
}

_Link.defaultProps = {
  display: 'inline'
}

export default _Link
