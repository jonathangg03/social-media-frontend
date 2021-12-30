import { Formik } from 'formik'
import axios from 'axios'
import { HiXCircle } from 'react-icons/hi'
import '../../styles/signForms.scss'

export default function SignUpForm({ onClose, onOpenOtherModal }) {
  return (
    <Formik
      initialValues={{ email: '', password: '', age: 0 }}
      onSubmit={async (values) => {
        const { email, password, age } = values
        axios.post('http://localhost:3000/user', {
          email,
          password,
          age
        })
      }}
    >
      {(handleChange, handleSubmit, isSubmitting) => {
        return (
          <form onSubmit={handleSubmit} className='signForm'>
            <h2>Registro</h2>
            <input {...email} />
            <input
              type='email'
              name='email'
              placeholder='Correo electronico'
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Contraseña'
              onChange={handleChange}
            />
            <input
              type='number'
              name='age'
              placeholder='Edad'
              onChange={handleChange}
            />
            <button className='signForm__button' disabled={isSubmitting}>
              Registrarse
            </button>
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
      }}
    </Formik>
  )
}
