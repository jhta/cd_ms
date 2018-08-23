import React from 'react'

const Input = ({ name, value, handleChange }) => (
  <div>
    <p>{name}</p>
    <input
      type='text'
      name={name}
      value={value}
      onChange={handleChange}
    />
    <style jsx>{`
      div {
        display: flex;
        margin: 1rem;
        align-items: center;
        width: 100%;
      }
      p {
        min-width: 100px;
      }
      input {
        margin-left: 1rem;
        height: 1.5rem;
        min-width: 300px;
        width: 400px;
      }
      `}</style>
  </div>
)

export default Input
