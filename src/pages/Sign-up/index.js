import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import FormSignUp from '../../components/FormSignUp'
import Mountains from '../../../public/mountains.jpg'

export default function SignUp() {
  return (
    <>
      <div className='home'>
        <div className='home__img-bg'>
          <img src={Mountains} alt='background' />
        </div>
        <section className='home__content'>
          <Logo />
          <div className='home__content-description'>
            <FormSignUp />
          </div>
          <p className='home__cta'>
            ¿Ya tienes cuenta? <Link to='/sign-in'>Ingresa</Link>
          </p>
        </section>
      </div>
    </>
  )
}
