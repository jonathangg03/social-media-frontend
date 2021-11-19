import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import SignUpForm from '../../components/SignUpForm'
import './signUp.scss'

export default function SignUp() {
  return (
    <>
      <section className='signUp'>
        <Logo />
        <div className='signUp__content'>
          <SignUpForm />
          <p className='signUp__cta'>
            ¿Ya tienes cuenta? <Link to='/sign-in'>Ingresa</Link>
          </p>
        </div>
      </section>
    </>
  )
}
