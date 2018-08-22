import React from 'react'
import Item from './Item'

const List = ({ items = [] }) => items.length
  ? (
    <ul>
      {
        items.map((item) => <Item key={item.id} {...item} />)
      }
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        `}</style>
    </ul>
  )
  : null

export default List
