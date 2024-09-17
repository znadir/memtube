import { useContext } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors.js'
import logoLightTheme from '../../assets/img/logo-light-theme.png'
import logoDarkTheme from '../../assets/img/logo-dark-theme.png'
import { ThemeContext } from '../../utils/context/ThemeProvider'
import { breakpoints } from '../../utils/style/breakpoints.js'

const Nav = styled.nav`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.primaryLighter : colors.primaryLight};
`

const Logo = styled.img`
  display: block;
  height: 65px;
  margin: auto;
  padding: 6px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 80px;
  }
`

export default function Header() {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <Nav isDarkMode={isDarkMode}>
      <Logo
        src={isDarkMode ? logoDarkTheme : logoLightTheme}
        alt="memtube logo"
      />
    </Nav>
  )
}
