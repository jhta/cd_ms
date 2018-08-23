import React from 'react'
import Markdown from 'react-markdown'

const Editor = ({ handleChange, code }) => (
  <article>
    <textarea name='code' onChange={handleChange} value={code} />
    <Markdown source={code} />
    <style jsx>{`
        article {
         display: flex;
        }
        textarea {
          min-width: 400px;
          min-height: 400px;
        }
      `}</style>
  </article>
)

Editor.defaultProps = {
  handleChange: () => {}
}

export default Editor
