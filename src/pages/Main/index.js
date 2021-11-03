import React from 'react'
import { useLocation } from 'wouter'
import Logo from '../../components/Logo'

import './index.scss'

export default function Home() {
  const [location, setLocation] = useLocation()

  const handleClickRegister = () => {
    setLocation('/sign-up')
  }

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
            <button>Ingresar</button>
            <button onClick={handleClickRegister}>Registrarse</button>
          </div>
        </div>
      </section>
    </div>
  )
}
