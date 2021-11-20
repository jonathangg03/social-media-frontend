import React from 'react'
import Logo from '../../components/Logo'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import SignInForm from '../../components/SignInForm'
import './main.scss'

export default function Home() {
  const navigate = useNavigate()
  const onClickLog = (e) => {
    if (e.target.textContent === 'Registrarme') {
      navigate('/sign-up')
    }
    if (e.target.textContent === 'Ingresar') {
      navigate('/sign-in')
    }
  }

  if (localStorage.getItem('auth')) return <Navigate to='/home' />

  return (
    <div className='main'>
      <section className='main__content'>
        <Logo />
        <h1>¡Comparte tus ideas con el mundo!</h1>
        <div className='main__content-description'>
          <SignInForm />
          <p className='signIn__cta'>
            ¿No tienes cuenta? <Link to='/sign-up'>Registrate</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
