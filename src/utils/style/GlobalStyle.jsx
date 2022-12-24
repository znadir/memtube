import { createGlobalStyle } from 'styled-components'
import { colors } from './colors.js'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

  :root {
    font-size: 62.5%; /* around 10px */
  }

  body {
    margin: 0px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    color: ${colors.primaryDarkest};
  }

  a {
    color: ${colors.primaryDarkest};
  }

  a:hover {
    color: ${colors.primaryDark};
  }

  h1 {
    font-weight: 500;
    font-size: 3.7rem;
  }

  p {
    font-weight: 500;
    font-size: 1.8rem;
  }
`
