import React from 'react'
import Highlight from 'react-highlight'
import Markdown from 'react-markdown'

const File = ({ content, filename, language }) => (
  <div>
    <h2>{ filename }</h2>
    {
      language.toLowerCase() === 'markdown'
        ? <Markdown source={content} />
        : (
          <Highlight language={language.toLowerCase()}>
            { content }
          </Highlight>
        )
    }
  </div>
)

export default File
