import React from 'react'
import Markdown from 'react-markdown'

const Editor = ({ handleChange, code }) => (
  <article>
    <textarea name='code' onChange={handleChange} value={code} />
    <div><Markdown source={code} /></div>
    <style jsx>{`
        article {
         display: flex;
         width: 100%;
         position: relative;
        }
        textarea {
          width: 50%;
          font-size: 14px;
          padding: 1rem;
          min-width: 400px;
          min-height: 600px;
          background: #444;
          color: white;
        }
        div {
        width: 50%;
        padding: 0 1rem;
        border: 1px solid black;
        }
      `}</style>
  </article>
)

Editor.defaultProps = {
  handleChange: () => {}
}

export default Editor
