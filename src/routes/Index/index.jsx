import styled from 'styled-components'
import loremMemsus from '../../assets/img/lorem-memsus.jpg'
import Button from '../../components/Button'
import { colors } from '../../utils/style/colors'
import newIcon from '../../assets/svg/new-icon.svg'

const Centered = styled.div`
  text-align: center;
`

const PostTitle = styled.h1`
  margin: 0;
`

const PostAbout = styled.p`
  margin: 0 0 10px 0;
`

const PostImg = styled.img`
  display: block;
  margin: auto auto 10px auto;
  width: 100%;
`

export default function Index() {
  return (
    <Centered>
      <PostTitle>The sun has two moods</PostTitle>
      <PostAbout>
        by{' '}
        <a href="https://www.reddit.com/user/" target="_blank" rel="noreferrer">
          Spartan-Yeet
        </a>{' '}
        on{' '}
        <a
          href="https://www.reddit.com/r/dankmemes/"
          target="_blank"
          rel="noreferrer"
        >
          r/dankmemes
        </a>
      </PostAbout>
      <PostImg src={loremMemsus} alt="meme from reddit" />
      <Button
        iconSvg={newIcon}
        text={' New icon'}
        bgColor={colors.secondary}
        textColor={colors.primary}
      />
    </Centered>
  )
}
