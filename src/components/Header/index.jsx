import styled from 'styled-components'
import { colors } from '../../utils/style/colors.js'
import logoLightTheme from '../../assets/img/logo-light-theme.png'

const Nav = styled.nav`
  background-color: ${colors.primaryLight};
`

const Logo = styled.img`
  display: block;
  height: 86px;
  margin: auto;
  padding: 6px;
`

export default function Header() {
  return (
    <Nav>
      <Logo src={logoLightTheme} alt="memtube logo" />
    </Nav>
  )
}
