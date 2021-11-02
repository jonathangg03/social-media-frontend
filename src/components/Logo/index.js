import React from 'react'
import { Link } from 'wouter'
import { FaLightbulb } from 'react-icons/fa'
import './index.scss'

export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <FaLightbulb />
      <p>miriio</p>
    </Link>
  )
}
