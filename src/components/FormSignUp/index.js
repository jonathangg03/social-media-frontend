import React from 'react'
import '../../styles/forms.scss'

export default function () {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registrado')
  }

  return (
    <form onSubmit={handleSubmit} className='formSignUp'>
      <label>
        <p>Nombre completo:</p>
        <input type='text' name='name' />
      </label>
      <label>
        <p>Edad:</p>
        <input type='number' name='age' />
      </label>
      <label>
        <p>Correo electrónico:</p>
        <input type='email' name='email' />
      </label>
      <label>
        <p>Contraseña:</p>
        <input type='password' name='password' />
      </label>
      <button>Registrarse</button>
    </form>
  )
}
