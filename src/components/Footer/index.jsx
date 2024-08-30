import { useContext } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import githubIcon from '../../assets/svg/github-icon.svg'
import moonIcon from '../../assets/svg/moon-icon.svg'
import sunIcon from '../../assets/svg/sun-icon.svg'
import { ThemeContext } from '../../utils/context/ThemeProvider'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primaryDarkest};
  color: ${colors.primary};
  padding: 30px 5%;
`

const Icon = styled.img`
  vertical-align: top;
`

const Credits = styled.div`
  margin: auto 0;
`

const ThemeSwitch = styled.button`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.tertiary : colors.primary};
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
  const { toggleTheme, isDarkMode } = useContext(ThemeContext)

  return (
    <>
      <Footer>
        <Credits>
          <Icon alt="github" src={githubIcon} /> Made by{' '}
          <Author
            href="https://github.com/znadir"
            target="_blank"
            rel="noreferrer"
          >
            znadir
          </Author>
        </Credits>
        <ThemeSwitch onClick={toggleTheme} isDarkMode={isDarkMode}>
          <Icon alt="switch theme" src={isDarkMode ? sunIcon : moonIcon} />
        </ThemeSwitch>
      </Footer>
    </>
  )
}
