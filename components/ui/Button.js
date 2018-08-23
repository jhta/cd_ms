import React from 'react'

const Button = ({ text }) => (
  <button>
    {text}
    <style jsx>{`
      button {
       background: black;
      box-shadow: none;
      border: 2px solid black;
      color: white;
      padding: .5rem 1rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      }
      `}</style>
  </button>
)

export default Button
