import React from 'react'
import Logo from '../../components/Logo'
import './index.scss'

export default function Home() {
  return (
    <div className='home'>
      <h1>¡Comparte tus ideas con el mundo!</h1>
      <section className='home__options'>
        <button>Ingresar</button>
        <button>Registrarse</button>
      </section>
    </div>
  )
}
