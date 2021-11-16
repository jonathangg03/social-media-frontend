import React, { useRef, useState } from 'react'
import { FaUserPlus, FaUser, FaPlus, FaHeart, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './options.scss'

export default function Menu() {
  return (
    <div className='options'>
      <Link to='/2/profile'>
        <FaHome type='new-idea-op' />
      </Link>
      <Link to='/2/liked'>
        <FaHeart type='liked-op' />
      </Link>
      <Link to='/2/newIdea'>
        <FaPlus type='new-idea-op' />
      </Link>
      <Link to='/search'>
        <FaUserPlus type='search-op' />
      </Link>
      <Link to='/2/profile'>
        <FaUser type='profile-op' />
      </Link>
    </div>
  )
}
