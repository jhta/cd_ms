import React from 'react'

const FileList = ({ files = {} }) => (
  <ul>
    {
      Object.keys(files).map((file, index) => (<li key={index}>{file}</li>))
    }
  </ul>
)

export default FileList
