import React from 'react'
import { Link } from 'wouter'
import { FaLightbulb } from 'react-icons/fa'
import './index.scss'

export default function Logo({ black }) {
  return (
    <Link to='/' className={`logo ${black ? 'black__logo' : ''}`}>
      <FaLightbulb />
      <p>miriio</p>
    </Link>
  )
}
