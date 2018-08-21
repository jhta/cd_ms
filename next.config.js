const env = require('./env-config')

console.log(env)
module.exports = {
  serverRuntimeConfig: {
    ...env
  }
}
