import React from 'react'
import { FaEllipsisH, FaHeart } from 'react-icons/fa'
import './index.scss'

export default function Idea({ title, content, date }) {
  return (
    <li class='idea'>
      <div className='idea__options'>
        <FaEllipsisH />
      </div>
      <p className='idea__date'>{date}</p>
      <h3>{title}</h3>
      <p className='idea__content'>{content}</p>
      <div className='idea__friends-options'>
        <button>
          <FaHeart />
        </button>
      </div>
    </li>
  )
}
