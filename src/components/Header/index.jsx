import { useContext } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors.js'
import logoLightTheme from '../../assets/img/logo-light-theme.png'
import { ThemeContext } from '../../utils/context/ThemeProvider'

const Nav = styled.nav`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.primaryLighter : colors.primaryLight};
`

const Logo = styled.img`
  display: block;
  height: 86px;
  margin: auto;
  padding: 6px;
`

export default function Header() {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <Nav isDarkMode={isDarkMode}>
      <Logo src={logoLightTheme} alt="memtube logo" />
    </Nav>
  )
}
