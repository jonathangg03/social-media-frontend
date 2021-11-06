import React from 'react'
import '../../styles/forms.scss'

export default function () {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Ingresado')
  }

  return (
    <form onSubmit={handleSubmit} className='formSignUp'>
      <label>
        <p>Correo electrónico:</p>
        <input type='email' name='email' />
      </label>
      <label>
        <p>Contraseña:</p>
        <input type='password' name='password' />
      </label>
      <button>Ingresar</button>
    </form>
  )
}
