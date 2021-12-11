import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
  }
`

export default GlobalStyle
