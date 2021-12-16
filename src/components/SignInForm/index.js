import { useNavigate } from 'react-router-dom'
import useInputValue from '../../hooks/useInputValue'
import { HiXCircle } from 'react-icons/hi'
import '../../styles/signForms.scss'

const default_user = {
  email: 'test@test.com',
  password: '123'
}

export default function SignInForm({ onClose, onOpenOtherModal }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='signForm'>
      <h2>Iniciar sesión</h2>
      <input type='text' name='name' placeholder='Nombre completo' />
      <input type='password' name='password' placeholder='Contraseña' />
      <button className='signForm__button'>Ingresar</button>
      <p className='signForm__cta'>
        ¿No tienes una cuenta?
        <button
          className='signForm__cta-link'
          type='button'
          onClick={onOpenOtherModal}
        >
          Registrate
        </button>
      </p>
      <HiXCircle className='signForm__close' onClick={onClose} />
    </form>
  )
}
