import React from 'react'
import MetaFileList from './Metafiles'
import Link from 'next/link'

const Item = ({ id, timeAgo, files = [], filesLength, description }) => (
  <li>
    <Link href={`/post?id=${id}`} as={`/post/${id}`}>
      <a><h2>{ description }</h2></a>
    </Link>
    <p className='time'>{ timeAgo }</p>
    <MetaFileList files={files} />
    {
      (filesLength > 3)
        ? <p>{`(${filesLength - 3} files more)`}</p>
        : null
    }

    <style jsx>{`
      li {
        margin-bottom: 1rem;
        box-sizing: border-box;
        border: 2px solid black;
        padding: 1rem;
      }
      .time {
        color: #888;
        font-weight: bold;
      }
      `}</style>
  </li>
)

export default Item
