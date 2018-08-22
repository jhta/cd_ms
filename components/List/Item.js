import React from 'react'
import MetaFileList from './Metafiles'
import Link from 'next/link'

const Item = ({ id, timeAgo, files = [], filesLength, description, hash }) => (
  <li>
    <Link href={`/post?id=${id}`} as={`/post/${hash}`}>
      <a><h2>{ description }</h2></a>
    </Link>
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
