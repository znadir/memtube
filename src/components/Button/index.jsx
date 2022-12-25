import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../utils/style/colors'

const ButtonWrapper = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  padding: 12px 20px;
  border-radius: 13px;
  cursor: pointer;
`

const LinkButton = styled(Link)`
  display: inline-block;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 13px;
  cursor: pointer;

  &:hover {
    color: ${({ textColor }) => textColor};
  }
`

export default function Button({
  text,
  bgColor,
  textColor,
  iconSvg,
  navigateTo,
  clickFunc,
}) {
  return navigateTo ? (
    <LinkButton
      bgColor={bgColor}
      textColor={textColor}
      iconSvg={iconSvg}
      to={navigateTo}
    >
      {iconSvg && <img src={iconSvg} alt="" />} {text}
    </LinkButton>
  ) : (
    <ButtonWrapper
      bgColor={bgColor}
      textColor={textColor}
      iconSvg={iconSvg}
      navigateTo={navigateTo}
      onClick={clickFunc}
    >
      {iconSvg && <img src={iconSvg} alt="" />} {text}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  iconSvg: PropTypes.string,
  navigateTo: PropTypes.string,
  clickFunc: PropTypes.func,
}

Button.defaultProps = {
  bgColors: colors.primaryDark,
  textColor: colors.primary,
}
