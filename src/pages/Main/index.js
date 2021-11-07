import React, { useEffect } from 'react'
import Logo from '../../components/Logo'
import { useLocation } from 'wouter'
import '../../styles/home.scss'
import './index.scss'

export default function Home() {
  const [location, setLocation] = useLocation()

  const onClickLog = (e) => {
    if (e.target.textContent === 'Registrarme') {
      setLocation('/sign-up')
    }
    if (e.target.textContent === 'Ingresar') {
      setLocation('/sign-in')
    }
  }

  useEffect(() => {
    //Para redirigir a home sí hay un auth en localStorage
    if (localStorage.getItem('auth')) {
      setLocation('/home')
    }
  }, [])

  return (
    <div className='home'>
      <div className='home__img-bg'>
        <img
          src='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
          alt='background'
        />
      </div>
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
