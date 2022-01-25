import React from 'react'
import { Link } from 'react-router-dom'
import LogoBig from '../../../public/Logo-big.png'
import LogoSm from '../../../public/Logo-sm.png'
import './index.scss'

export default function Logo({ big }) {
  return (
    <Link to='/' className='Logo'>
      {big ? (
        <div className='Logo__big'>
          <img src={LogoBig} alt='Miriio Logo' />
        </div>
      ) : (
        <div className='Logo__sm'>
          <img src={LogoSm} alt='Miriio Logo' />
        </div>
      )}
    </Link>
  )
}
