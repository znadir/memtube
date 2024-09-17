import styled from 'styled-components'
import Button from '../../components/Button'
import { colors } from '../../utils/style/colors'
import newIcon from '../../assets/svg/new-icon.svg'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../components/Loader'
import errorMeme from '../../assets/img/error-meme.jpg'

const Centered = styled.div`
  text-align: center;
`

const PostTitle = styled.h1`
  margin: 0 0 10px 0;
  line-height: 1.2;
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
  const { data, isLoading, error, reload } = useFetch(
    'https://meme-api.com/gimme'
  )
  const authorUserPage =
    data && 'https://www.reddit.com/user/' + data.author + '/'
  const subredditPage =
    data && 'https://www.reddit.com/r/' + data.subreddit + '/'

  document.title = data ? 'Memtubing ' + data.title : document.title // set page title

  return (
    <Centered>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          <PostTitle>Oops! Something went wrong</PostTitle>
          <PostAbout>by undefined </PostAbout>
          <PostImg src={errorMeme} alt="meme from reddit" />
          <Button
            iconSvg={newIcon}
            text={' Try again'}
            bgColor={colors.secondary}
            textColor={colors.primary}
            clickFunc={reload}
          />
        </>
      ) : (
        <>
          <PostTitle>{data && data.title}</PostTitle>
          <PostAbout>
            by{' '}
            <a href={authorUserPage} target="_blank" rel="noreferrer">
              {data && data.author}
            </a>{' '}
            on{' '}
            <a href={subredditPage} target="_blank" rel="noreferrer">
              r/{data && data.subreddit}
            </a>
          </PostAbout>
          <PostImg src={data && data.url} alt="meme from reddit" />
          <Button
            iconSvg={newIcon}
            text={' New meme'}
            bgColor={colors.secondary}
            textColor={colors.primary}
            clickFunc={reload}
          />
        </>
      )}
    </Centered>
  )
}
