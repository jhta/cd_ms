import React from 'react'
import MetaFileList from './Metafiles'

const Item = ({ timeAgo = '', files = [], filesLength,  description }) => (
  <li>
    <h2>{ description }</h2>
    <MetaFileList files={files} />
    {
      (filesLength > 3)
        ? <p>{`(${filesLength - 3} files more)`}</p>
        : null
    }
    <p>{ timeAgo }</p>

    <style jsx>{`
      li {
        border: 1px solid black;
      }
      `}</style>
  </li>
)

export default Item
