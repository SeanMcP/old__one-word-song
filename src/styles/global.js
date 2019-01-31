import { createGlobalStyle } from 'styled-components'

// For themed styles only; everything else
// goes in ./index.css
export default createGlobalStyle`
    body {
        color: ${props => props.theme.text_primary};
    }
`
