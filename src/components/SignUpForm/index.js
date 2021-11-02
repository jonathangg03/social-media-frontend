import React from 'react'
import './index.scss'

export default function SignUpForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Nombre completo:</p>
        <input type='text' name='name' />
      </label>
      <label>
        <p>Edad:</p>
        <input type='number' name='name' />
      </label>
      <label>
        <p>Correo electrónico:</p>
        <input type='email' name='name' />
      </label>
      <label>
        <p>Contraseña:</p>
        <input type='password' name='name' />
      </label>
      <button>Registrarse</button>
    </form>
  )
}
