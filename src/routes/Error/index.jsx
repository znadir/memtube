import styled from 'styled-components'
import Button from '../../components/Button'
import { colors } from '../../utils/style/colors'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: auto;
`

const Content = styled.div`
  text-align: center;
`

const Heading = styled.h1`
  margin: 0;
`
const ErrorText = styled.p`
  margin: 0 0 20px 0;
`

export default function Error() {
  return (
    <Wrapper>
      <Content>
        <Heading>Oops</Heading>
        <ErrorText>Something went wrong!</ErrorText>
        <Button
          text="Get Back Home"
          bgColor={colors.primaryDarkest}
          textColor={colors.primary}
          navigateTo="/"
        />
      </Content>
    </Wrapper>
  )
}
