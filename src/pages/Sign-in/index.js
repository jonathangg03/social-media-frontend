import React from 'react'
import { Link } from 'wouter'
import Logo from '../../components/Logo'
import FormSignIn from '../../components/FormSignIn'
import Mountains from '../../../public/mountains.jpg'

export default function SignUp() {
  return (
    <div className='home'>
      <div className='home__img-bg'>
        <img src={Mountains} alt='background' />
      </div>
      <section className='home__content'>
        <Logo />
        <div className='home__content-description'>
          <FormSignIn />
        </div>
        <p className='home__cta'>
          ¿No tienes cuenta? <Link to='/sign-up'>Registrate</Link>
        </p>
      </section>
    </div>
  )
}
