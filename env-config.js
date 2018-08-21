require('dotenv').config()

const defaultValues = {
  ENV: 'development',
  DOMAIN: 'http://localhost:3000',
  PORT: '3000',
  SECRET_SESSION: 'litle cat',
  GITHUB_API: '',
  GITHUB_CALLBACK: 'http://localhost:3000/login/github/callback',
  GITHUB_AUTORIZE_URL: 'https://github.com/login/oauth/authorize',
  GITHUB_TOKEN_URL: 'https://github.com/login/oauth/access_token',
  GITHUB_CLIENT: '',
  GITHUB_SECRET: ''
}



const config = Object.keys(defaultValues)
  .reduce(
    (values, key) => ({
      ...values,
      [`process.env.${key}`]: process.env[key] || defaultValues[key]
    })
    , {}
  )

module.exports = config
