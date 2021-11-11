import React from 'react'
import { Link } from 'react-router-dom'
import { FaLightbulb } from 'react-icons/fa'
import './logo.scss'

export default function Logo({ black }) {
  return (
    <Link to='/' className={`logo ${black ? 'black__logo' : ''}`}>
      <FaLightbulb />
      <p>miriio</p>
    </Link>
  )
}
