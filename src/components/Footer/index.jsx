import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import githubIcon from '../../assets/svg/github-icon.svg'
import moonIcon from '../../assets/svg/moon-icon.svg'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primaryDarkest};
  color: ${colors.primary};
  padding: 30px 5%;
`

const Icon = styled.img`
  vertical-align: bottom;
`

const Credits = styled.div`
  margin: auto 0;
`

const ThemeSwitch = styled.button`
  background-color: ${colors.primary};
  height: 55px;
  width: 55px;
  border-radius: 50%;
  cursor: pointer;
`

const Author = styled.a`
  color: ${colors.primary};
  &:hover {
    color: ${colors.primaryLight};
  }
`

export default function Header() {
  return (
    <>
      <Footer>
        <Credits>
          <Icon alt="github" src={githubIcon} /> Made by{' '}
          <Author
            href="https://github.com/nadirzebiri"
            target="_blank"
            rel="noreferrer"
          >
            nadirzebiri
          </Author>
        </Credits>
        <ThemeSwitch>
          <Icon alt="switch theme" src={moonIcon} />
        </ThemeSwitch>
      </Footer>
    </>
  )
}
