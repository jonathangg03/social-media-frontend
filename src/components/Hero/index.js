import React from 'react'
import { FaPen } from 'react-icons/fa'
import { Link } from 'wouter'
import './index.scss'

export default function Hero({
  profilePicture,
  backgroundPicture,
  name,
  description
}) {
  return (
    <div className='hero'>
      <div className='hero__background-picture'>
        <img src={backgroundPicture} alt={`${name} background picture`} />
      </div>
      <div className='hero__information'>
        <div className='hero__information-picture'>
          <img src={profilePicture} alt={name} />
        </div>
        <h2>{name}</h2>
        <h4>{description}</h4>
      </div>
      <div className='hero__edit'>
        <Link to='/'>
          <FaPen />
        </Link>
      </div>
    </div>
  )
}
