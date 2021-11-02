import React from 'react'
import { useLocation } from 'wouter'
import './index.scss'

export default function Home() {
  const [location, setLocation] = useLocation()

  const handleClickRegister = () => {
    setLocation('/sign-up')
  }

  return (
    <div className='home'>
      <h1>¡Comparte tus ideas con el mundo!</h1>
      <section className='home__options'>
        <button>Ingresar</button>
        <button onClick={handleClickRegister}>Registrarse</button>
      </section>
    </div>
  )
}
