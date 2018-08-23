import React, { Fragment } from 'react'
import FileList from '../components/Post/FileList'
import Fade from 'react-reveal/Fade'
import Button from '../components/ui/Button'

import withAuth from '../utils/oauth/withAuth'
import { gist as fetchGist } from '../services/github/api'
import parseGist from '../utils/parser/gist'
import Layout from '../components/Layout'

const Post = ({ description, owner = {}, timeAgo, files }) => (
  <Fade>
    <Layout>
      <h1>{description}</h1>
      <p className='time'>{`(${timeAgo})`}</p>
      <p>created by: <a href={owner.url}>@{owner.user}</a></p>
      <FileList files={files} />
      <div>
        <a href='/'><Button text='< BACK' font={1.2}/></a>
      </div>
      <style jsx>{`
        .time {
          color: #888;
          font-weight: bold;
        }
        div {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }
        `}</style>
    </Layout>
  </Fade>
)

Post.getInitialProps = async ({ query }) => {
  const { id } = query
  if (!id) {
    return {
      error: 'Id is not defined on query params'
    }
  }

  try {
    const response = await fetchGist(id)
    if (response.status === 200) {
      const data = parseGist(response.data)
      return {
        ...data,
        id
      }
    }
    return { error: `error: ${response.status}` }
  } catch (e) {
    return {
      error: e.message
    }
  }
}

export default withAuth(Post)
