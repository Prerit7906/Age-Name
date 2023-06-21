import React from 'react'
import './Itemlist.css'
import Item from '../Item/Item.js'

export default function Itemlist(props) {
  return (
    <ul className='item-handler'>
      {
        props.detail.map(data=>(
          <Item>{data.Name+'('+data.Age+' years)'}</Item>
        ))
      }
    </ul>
  )
}
