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
    <div className='profile'>
      <div className='profile__background-picture'>
        <img src={backgroundPicture} alt={`${name} background picture`} />
      </div>
      <div className='profile__information'>
        <div className='profile__information-top'>
          <div className='profile__information-picture'>
            <img src={profilePicture} alt={name} />
          </div>
          <h2>{name}</h2>
        </div>
        <h4>{description}</h4>
      </div>
      <div className='profile__edit'>
        <Link to='/'>
          <FaPen />
        </Link>
      </div>
    </div>
  )
}
