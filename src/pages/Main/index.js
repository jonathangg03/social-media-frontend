import React, { useEffect } from 'react'
import Logo from '../../components/Logo'
import { useNavigate } from 'react-router-dom'
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

  useEffect(() => {
    //Para redirigir a home sí hay un auth en localStorage
    if (localStorage.getItem('auth')) {
      navigate('/home')
    }
  }, [])

  return (
    <div className='home'>
      <section className='home__content'>
        <Logo />
        <div className='home__content-description'>
          <h1>¡Comparte tus ideas con el mundo!</h1>
          <div className='home__content-description-buttons'>
            <button onClick={onClickLog}>Registrarme</button>
            <button onClick={onClickLog}>Ingresar</button>
          </div>
        </div>
      </section>
    </div>
  )
}
