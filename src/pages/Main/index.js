import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Logo from '../../components/Logo'

import './index.scss'

export default function Home() {
  const { loginWithRedirect } = useAuth0()

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
            <button onClick={loginWithRedirect}>Ingresar</button>
          </div>
        </div>
      </section>
    </div>
  )
}

/*Se hace similar con el logout.pero con el elemento logout del mismo hook*/
/*
Del mismo hook podemos sacar:
  .isAuthenticated: Saber sí está autenticado.
  .isLoading: Sí está cargando la solicitud.
  .user: Contiene toda la información del usuario: picture, name, email...

*/
