import React, { useRef, useState } from 'react'
import { FaUserPlus, FaUser, FaPlus, FaHeart, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './menu.scss'

export default function Menu() {
  return (
    <ul className='options'>
      <li className='options__item'>
        <Link to='/home'>
          <FaHome />
        </Link>
      </li>
      <li className='options__item'>
        <Link to='/2/liked'>
          <FaHeart />
        </Link>
      </li>
      <li className='options__item'>
        <Link to='/2/newIdea'>
          <FaPlus />
        </Link>
      </li>
      <li className='options__item'>
        <Link to='/search'>
          <FaUserPlus />
        </Link>
      </li>
      <li className='options__item'>
        <Link to='/2/profile'>
          <FaUser />
        </Link>
      </li>
    </ul>
  )
}
