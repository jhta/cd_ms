const axios = require('axios')
const debug = require('debug')('server')
const constants = require('./constants')
const { AUTHORIZE_URL, ACCESS_TOKEN_URL } = constants

module.exports = (config = {}) => {
  const { client_id, client_secret, redirect_uri } = config

  return {
    redirectToAuthorize: (req, res) => {
      debug('login github redirecting')
      res.redirect(`${AUTHORIZE_URL}?client_id=${client_id}`)
    },

    getToken: (req, res) => {
      debug('login callback, ready for get the access token')
      return axios.post(ACCESS_TOKEN_URL, {
        client_id,
        client_secret,
        redirect_uri,
        code: req.query.code
      })
    }
  }
}
