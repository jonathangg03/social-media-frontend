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
        <input type='text' name='name' placeholder='Nombre completo' />
      </label>
      <label>
        <input type='number' name='age' placeholder='Edad' />
      </label>
      <label>
        <input type='email' name='email' placeholder='Correo electronico' />
      </label>
      <label>
        <input type='password' name='password' placeholder='Contraseña' />
      </label>
      <button>Registrarse</button>
    </form>
  )
}
