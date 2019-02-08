import styled from 'styled-components'

import Link from 'components/common/Link'

export const StyledLinkContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;

  span {
    display: block;
  }
  span:last-of-type {
    font-size: 75%;
  }
`
