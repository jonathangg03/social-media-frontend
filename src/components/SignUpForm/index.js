import React from 'react'
import '../../styles/signForms.scss'

export default function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registrado')
  }

  return (
    <form onSubmit={handleSubmit} className='formSignUp'>
      <input type='text' name='name' placeholder='Nombre completo' />
      <input type='number' name='age' placeholder='Edad' />
      <input type='email' name='email' placeholder='Correo electronico' />
      <input type='password' name='password' placeholder='Contraseña' />
      <button>Registrarse</button>
    </form>
  )
}
