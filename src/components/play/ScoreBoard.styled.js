import styled, { css } from 'styled-components'

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    flex: 1;
    text-align: center;
  }
`

export const StyledLi = styled.li`
  border-top: 4px solid transparent;
  flex: 1;
  text-align: center;

  ${p =>
    p.isActive &&
    css`
      border-color: ${p.theme.primary};
    `}
`
