import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import './index.scss'

export default function Idea({ name, content, date }) {
  return (
    <li class='idea'>
      <div className='idea__options'>
        <FaEllipsisH />
      </div>
      <h3>{name}</h3>
      <p className='idea__content'>{content}</p>
      <p className='idea__date'>{date}</p>
    </li>
  )
}
