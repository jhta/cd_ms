const debug = require('debug')('server')
const constants = require('./constants')
const { AUTHORIZE_URL } = constants

module.exports = (config = {}) => {
  const { clientId, clientSecret, callbackUrl } = config

 return {
    redirectToAuthorize: (req, res) => {
      debug('login github redirecting')
      res.redirect(`${AUTHORIZE_URL}?client_id=${clientId}`)
    }
  }
}
