import axios from 'axios'
import { useContext } from 'react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { HiXCircle } from 'react-icons/hi'
import { setCookie } from '../../utils/cookies'
import Context from '../../Context/authContext'
import '../../styles/signForms.scss'

export default function SignUpForm({ onClose, onOpenOtherModal }) {
  const navigate = useNavigate()
  const { setJwt } = useContext(Context)
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={async (values) => {
        const { name, email, password } = values
        try {
          await axios.post('http://localhost:3001/user', {
            name,
            email,
            password
          })
          const response = await axios.post(
            'http://localhost:3001/auth/sign-in',
            {
              email,
              password
            }
          )
          setCookie({ name: 'token', value: response.data.body.jwt })
          setJwt(response.data.body.jwt)
          navigate('/home')
        } catch (error) {
          console.log(error.message)
        }
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} className='signForm'>
            <h2>Registro</h2>
            <input
              type='text'
              name='name'
              placeholder='Nombre completo'
              onChange={handleChange}
            />
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
