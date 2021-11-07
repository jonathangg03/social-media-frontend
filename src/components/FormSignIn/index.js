import React from 'react'
import { useLocation } from 'wouter'
import useInputValue from '../../hooks/useInputValue'
import '../../styles/forms.scss'

const default_user = {
  email: 'test@test.com',
  password: '123'
}

export default function () {
  const [location, setLocation] = useLocation()

  const emailInput = useInputValue({
    value: '',
    name: 'email',
    type: 'email'
  })

  const passwordInput = useInputValue({
    value: '',
    name: 'password',
    type: 'password'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = default_user
    const { value: emailV } = emailInput
    const { value: passV } = passwordInput

    if (email === emailV && password === passV) {
      localStorage.setItem('auth', true)
      setLocation('/home')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='formSignUp'>
      <label>
        <p>Correo electrónico:</p>
        <input {...emailInput} />
      </label>
      <label>
        <p>Contraseña:</p>
        <input {...passwordInput} />
      </label>
      <button>Ingresar</button>
    </form>
  )
}
