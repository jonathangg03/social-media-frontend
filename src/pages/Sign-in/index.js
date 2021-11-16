import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import SignInForm from '../../components/SignInForm'
import './signIn.scss'

export default function SignIn() {
  return (
    <>
      <section className='signIn'>
        <Logo />
        <div className='signIn__content'>
          <SignInForm />
        </div>
        <p className='signIn__cta'>
          ¿No tienes cuenta? <Link to='/sign-up'>Registrate</Link>
        </p>
      </section>
    </>
  )
}
