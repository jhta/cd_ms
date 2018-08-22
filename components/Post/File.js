import React from 'react'

const File = ({ content, filename }) => (
  <div>
    <h2>{ filename }</h2>
    <p>{ content }</p>
  </div>
)

export default File
