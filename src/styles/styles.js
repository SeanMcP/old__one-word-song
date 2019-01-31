import { createGlobalStyle } from 'styled-components'

export const theme = {
  background: 'whitesmoke',
  text_primary: '#424242'
}

// For themed styles only; everything else
// goes in ./index.css
export const GlobalStyle = createGlobalStyle`
    body {
        color: ${props => props.theme.text_primary};
    }
`
