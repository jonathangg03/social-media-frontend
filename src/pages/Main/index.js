import React, { useEffect } from 'react'
import Logo from '../../components/Logo'
import { useLocation } from 'wouter'
import Mountains from '../../../public/mountains.jpg'
import '../../styles/home.scss'
import './main.scss'

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
        <img src={Mountains} alt='background' />
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
