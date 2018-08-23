import React from 'react'

const Header = ({ description, handleChange })=> (
  <div>
    <p>Description: </p>
    <input
      type='text'
      name='description'
      value={description}
      placeholder='my nice gist'
      onChange={handleChange}
    />
    <style jsx>{`
      div {
        display: flex;
        margin: 1rem;
        align-items: center;
        width: 100%;
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

export default Header
