import React, { Fragment, Component } from 'react'
import List from '../components/List'

import withAuth from '../utils/oauth/withAuth'
import { list as fetchList } from '../services/github/api'
import parseList from '../utils/parser/list'

import debug from 'debug'
const pagesDebug = debug('pages')

class App extends Component {
  render () {
    return (
      <Fragment>
        <a href='/login/github'>Hello</a>
        <h2>token: {this.props.token}</h2>
        <List items={this.props.data} />
      </Fragment>
    )
  }
}

App.getInitialProps = async ({ token }) => {
  try {
    const response = await fetchList(token)
    pagesDebug('gists fetched', response.status)
    if (response.status === 200) {
      return {
        data: parseList(response.data) || []
      }
    }

    return {
      error: `error: ${response.status}`,
      data: []
    }
  } catch (e) {
    pagesDebug(`error: ${e.status}: ${e.message}`)
    return {
      error: e.message,
      data: []
    }
  }
}

export default withAuth(App)
