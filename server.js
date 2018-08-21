const express = require('express')
const next = require('next')
const axios = require('axios')
const qs = require('query-string')

const port = parseInt(process.env.port, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const morgan = require('morgan')('dev', {
  skip: (req, res) => req.url.includes('_next')
})


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

    server.get('/login/github', (req, res) => {
      res.redirect('https://github.com/login/oauth/authorize?client_id=e2267034308110300976')
    })

    server.get('/login/github/callback',(req, res) => {
      axios.post('https://github.com/login/oauth/access_token', {
        client_id: 'e2267034308110300976',
        client_secret: 'e52ea76a7670f0ca6211abb463e43301c0e44d45',
        redirect_uri: 'http://localhost:3000/login/github/callback',
        code: req.query.code
      }).then((apiResponse = {}) => {
        const query = qs.parse(apiResponse.data) || {}
        req.session = req.session || {}
        req.session.token = query.access_token
        res.cookie('access_token', query.access_token)
        app.render(req, res, '/')
      })
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.log(`>Ready on http://localhost:${port}`)
    })

  })
