import React, { Component } from 'react'
import { get as _get } from 'lodash'
import { persitsToken, isLogged } from './client'
import debug from 'debug'
const serverDebug = debug('server')

export default function withAuth (BaseComponent) {
  class AuthComponent extends Component {
    static async getInitialProps (ctx = {}) {
      const { req, res } = ctx
      const token = _get(req, 'session.token', null) || _get(res, 'cookies.access_token', '')
      const initialProps = BaseComponent.getInitialProps
        ? await BaseComponent.getInitialProps({...ctx, token})
        : {}
      serverDebug('access token', token)
      serverDebug('initialProps', initialProps)
      return { ...initialProps, token }
    }

    componentDidMount () {
      const { token } = this.props
      if (!isLogged() && token) persitsToken(token)
    }

    render () {
      return <BaseComponent {...this.props} isLogged />
    }
  }

  return AuthComponent
}
