import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { breakpoints } from '../../utils/style/breakpoints'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  padding: 30px 0 30px 0;
  width: 90%;
  margin: auto;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 40%;
  }
`

export default function Root() {
  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Wrapper>
    </>
  )
}
