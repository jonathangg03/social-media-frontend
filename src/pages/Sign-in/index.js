import React from 'react'
import { Link } from 'wouter'
import Logo from '../../components/Logo'
import FormSignIn from '../../components/FormSignIn'

export default function SignUp() {
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
          <FormSignIn />
        </div>
        <p className='home__cta'>
          ¿No tienes cuenta? <Link to='/sign-up'>Registrate</Link>
        </p>
      </section>
    </div>
  )
}
