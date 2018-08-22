import React, { Fragment, Component } from 'react'
import withAuth from '../utils/oauth/withAuth'
import { list as listGist } from '../services/github/api'
import debug from 'debug'
const pagesDebug = debug('pages')

class App extends Component {
  render () {
    return (
      <Fragment>
        <a href='/login/github'>Hello</a>
        <h2>token: {this.props.token}</h2>
      </Fragment>
    )
  }
}

App.getInitialProps = async ({ token }) => {
  try {
    const response = await listGist(token)
    pagesDebug('gists fetched', response.status)
    if (response.status === 200) {
      return {
        data: response.data || {}
      }
    }

    return {
      error: `error: ${response.status}`
    }
      } catch (e) {
    pagesDebug(`error: ${e.status}: ${e.message}`)
    return {
      error: e.message
    }
  }
}

export default withAuth(App)
