import React, { Fragment } from 'react'
import FileList from '../components/Post/FileList'
import withAuth from '../utils/oauth/withAuth'
import { gist as fetchGist } from '../services/github/api'
import parseGist from '../utils/parser/gist'

const Post = ({ description, owner = {}, timeAgo, files }) => (
  <Fragment>
    <h1>{description}</h1>
    <p>{timeAgo}</p>
    <p>created by: <a href={owner.url}>@{owner.user}</a></p>
    <FileList files={files} />
  </Fragment>
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
