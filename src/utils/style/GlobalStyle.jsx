import { createGlobalStyle } from 'styled-components'
import { colors } from './colors.js'
import { breakpoints } from './breakpoints.js'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

  :root {
    font-size: 62.5%; /* around 10px */
  }

  * {
    border: none;
  }

  body {
    margin: 0px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${colors.primaryDarkest};
    background-color: ${colors.primary};
  }

  button {
    font-size: inherit;
    font-family: inherit;
  }

  a {
    color: ${colors.primaryDarkest};
  }

  a:hover {
    color: ${colors.primaryLighter};
  }

  h1 {
    font-weight: 500;
    font-size: 3.2rem;
  }

  /* typo for PC */
  @media screen and (min-width: ${breakpoints.tablet}) {
    body {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 3.7rem;
    }
  }

`
