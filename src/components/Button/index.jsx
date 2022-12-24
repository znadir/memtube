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

export default function Button({ text, bgColor, textColor, iconSvg }) {
  return (
    <ButtonWrapper bgColor={bgColor} textColor={textColor} iconSvg={iconSvg}>
      {iconSvg && <img src={iconSvg} alt="" />} {text}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  iconSvg: PropTypes.string,
}

Button.defaultProps = {
  bgColors: colors.primaryDark,
  textColor: colors.primary,
}
