import { createGlobalStyle } from 'styled-components'
import { colors } from './colors.js'
import { breakpoints } from './breakpoints.js'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

export default function GlobalStyle() {
  const { isDarkMode } = useContext(ThemeContext)

  return <StyleGlobalStyle isDarkMode={isDarkMode}></StyleGlobalStyle>
}

const StyleGlobalStyle = createGlobalStyle`
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
    color: ${({ isDarkMode }) =>
      isDarkMode ? colors.primary : colors.primaryDarkest};
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? colors.primaryDark : colors.primary};
  }

  button {
    font-size: inherit;
    font-family: inherit;
  }

  a {
    color: ${({ isDarkMode }) =>
      isDarkMode ? colors.primary : colors.primaryDarkest};
  }

  a:hover {
    color: ${({ isDarkMode }) =>
      isDarkMode ? colors.primaryLight : colors.primaryLighter};
  }

  h1 {
    font-weight: 500;
    font-size: 2.9rem;
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
