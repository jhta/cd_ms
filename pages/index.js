import React, { Fragment } from 'react'
import { get as _get } from 'lodash'

const App = (props) => (
  <Fragment>
    <a href='/login/github'>Hello</a>
    <h2>token: {props.token}</h2>
  </Fragment>
)

App.getInitialProps = ({ req, res }) => ({
  token: _get(req, 'session.token', 'nothing today')
})

export default App
