import React from 'react'
import Highlight from 'react-highlight'

const File = ({ content, filename, language }) => (
  <div>
    <h2>{ filename }</h2>
    <Highlight language={language.toLowerCase()}>
      { content }
    </Highlight>
  </div>
)

export default File
