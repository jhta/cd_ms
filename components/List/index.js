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
          border: 1px solid red;
        }
        `}</style>
    </ul>
  )
  : null


export default List
