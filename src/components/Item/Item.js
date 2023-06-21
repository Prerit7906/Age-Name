import React from 'react'
import './Item.css'
function Item(props) {
  // console.log(props);
  return (
    <div className='item'>{props.children}</div>
  )
}

export default Item