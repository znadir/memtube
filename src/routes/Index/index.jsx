import styled from 'styled-components'
import Button from '../../components/Button'
import { colors } from '../../utils/style/colors'
import newIcon from '../../assets/svg/new-icon.svg'
import { useFetch } from '../../utils/hooks'
import { Loader } from '../../components/Loader'

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
  const { data, isLoading, error } = useFetch('https://meme-api.com/gimme')
  const authorUserPage =
    data && 'https://www.reddit.com/user/' + data.author + '/'
  const subredditPage =
    data && 'https://www.reddit.com/r/' + data.subreddit + '/'

  return (
    <Centered>
      {isLoading ? (
        <Loader />
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
            text={' New icon'}
            bgColor={colors.secondary}
            textColor={colors.primary}
          />
        </>
      )}
    </Centered>
  )
}
