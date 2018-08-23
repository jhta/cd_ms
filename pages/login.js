import React from 'react'
import Button from '../components/ui/Button'

const Login = props => (
  <div>
    <h1>Welcome.</h1>
    <a href='/login/github'><Button text={`Let's go!`} font={2} /></a>
    <style jsx>{`
      div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        font-size: 5rem;
        margin-bottom: 3rem;
      }
      `}</style>
  </div>
)

export default Login

