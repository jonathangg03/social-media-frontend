import { HiXCircle } from 'react-icons/hi'
import '../../styles/signForms.scss'

export default function SignUpForm({ onClose, onOpenOtherModal }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registrado')
  }

  return (
    <form onSubmit={handleSubmit} className='signForm'>
      <h2>Registro</h2>
      <input type='text' name='name' placeholder='Nombre completo' />
      <input type='number' name='age' placeholder='Edad' />
      <input type='email' name='email' placeholder='Correo electronico' />
      <input type='password' name='password' placeholder='Contraseña' />
      <button className='signForm__button'>Registrarse</button>
      <p className='signForm__cta'>
        ¿Ya tienes una cuenta?
        <button
          className='signForm__cta-link'
          type='button'
          onClick={onOpenOtherModal}
        >
          Inicia sesión
        </button>
      </p>
      <HiXCircle className='signForm__close' onClick={onClose} />
    </form>
  )
}
