import React from 'react'

const MetaFile = ({ filename, language }) => (
  <span>
    <bold>*</bold>{` ${filename} (${language})`}
    <style jsx>{`
      span {
        display: block;
      }
      bold {
        font-weight: bold;
      }
      `}</style>
  </span>
)

const MetaFileList = ({ files = [] }) => files.length && (
  <div>
    {
      files.map((file = {}, index) => (<MetaFile key={index} {...file} />))
    }
  </div>
)

export default MetaFileList
