import React from 'react'

const Post = (props) => <h1>id: {props.id} </h1>

Post.getInitialProps = ({ query }) => ({ ...query })

export default Post
