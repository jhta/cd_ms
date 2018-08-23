import React from 'react'
import Button from '../ui/Button'

const Bottom = ({ handleAddFile }) => (
  <div>
    <Button text='CREATE!' />
    <a href='#' onClick={handleAddFile}>Add File</a>
    <style jsx>{`
      div {
        display: flex;
        margin: 1rem;
        align-items: center;
      }

      a {
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 1rem;
      }
      `}</style>
  </div>
)

export default Bottom
