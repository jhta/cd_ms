const express = require('express')
const next = require('next')
const axios = require('axios')
const qs = require('query-string')
const getConfig = require('next/config')
const debug = require('debug')('server')
const GithubAuth = require('./services/github/auth')
const _get = require('lodash/get')

// @TODO confiure global vars
// @TODO refactorize everything!

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const morgan = require('morgan-debug')('server', 'dev', {
  skip: (req, res) => req.url.includes('_next')
})

const authClient = GithubAuth({
  client_id: 'e2267034308110300976',
  client_secret: 'e52ea76a7670f0ca6211abb463e43301c0e44d45',
  redirect_uri: 'http://localhost:3000/login/github/callback'
})

const isLogged = (req, res, next) => {
  const token = _get(req, 'session.token', null) || _get(res, 'cookies.access_token')
  if (token) {
    res.cookie('access_token', token)
    next()
  }
  res.redirect('/login')
}

app.prepare()
  .then(() => {
    const server = express()
    server.use(morgan)
    server.use(require('cookie-parser')())
    server.use(require('body-parser').urlencoded({ extend: true }))
    server.use(require('express-session')({
      secret: 'halo halo',
      resave: true,
      saveUninitialized: true
    }))

    server.get('/login/github', authClient.redirectToAuthorize)

    server.get('/login/github/callback', (req, res) => {
      authClient.getToken(req, res)
        .then((apiResponse = {}) => {
          const query = qs.parse(apiResponse.data) || {}
          debug('access token receive, ready for add the session cookie')
          req.session = req.session || {}
          req.session.token = query.access_token
          res.cookie('access_token', query.access_token)
          res.redirect('/')
        })
    })

    server.get('/create-gist', (req, res) => {
      return app.render(req, res, '/create')
    })

    server.get('/', (req, res) => {
      return app.render(req, res, '/')
    })

    server.get('/login', (req, res) => {
      return app.render(req, res, '/login')
    })

    server.get('/post/:id', (req, res) => {
      return app.render(req, res, '/post', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      debug('server running')
      console.log(`>Ready on ${process.env.DOMAIN || 'http://localhost:3000'}`)
    })
  })
