import React from 'react'
import File from './File'

const FileList = ({ files = [] }) => (
  <ul>
    {
      files.map((file, index) => <File key={index} {...file} />)
    }
  </ul>
)

export default FileList
