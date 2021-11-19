import React, { useEffect } from 'react'
import Logo from '../../components/Logo'
import { useNavigate, Navigate } from 'react-router-dom'
import './main.scss'

export default function Home() {
  const navigate = useNavigate()
  const onClickLog = (e) => {
    if (e.target.textContent === 'Registrarme') {
      navigate('/sign-up')
    }
    if (e.target.textContent === 'Ingresar') {
      navigate('/sign-in')
    }
  }

  if (localStorage.getItem('auth')) return <Navigate to='/home' />

  return (
    <div className='main'>
      <section className='main__content'>
        <Logo />
        <div className='main__content-description'>
          <h1>¡Comparte tus ideas con el mundo!</h1>
          <div className='main__content-description-buttons'>
            <button onClick={onClickLog}>Registrarme</button>
            <button onClick={onClickLog}>Ingresar</button>
          </div>
        </div>
      </section>
    </div>
  )
}
