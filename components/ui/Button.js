import React from 'react'

const Button = ({ text, font = 1 }) => (
  <button>
    {text}
    <style jsx>{`
      button {
       background: black;
      box-shadow: none;
      border: 2px solid black;
      color: white;
      padding: ${font / 2}rem ${font}rem;
      font-size: ${font}rem;
      font-weight: bold;
      cursor: pointer;
      }
      `}</style>
  </button>
)

export default Button
