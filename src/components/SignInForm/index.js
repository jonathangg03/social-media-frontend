import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { HiXCircle } from 'react-icons/hi'
import { setCookie } from '../../utils/cookies'
import Context from '../../Context/authContext'
import '../../styles/signForms.scss'

export default function SignInForm({ onClose, onOpenOtherModal }) {
  const navigate = useNavigate()
  const { setJwt } = useContext(Context)

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        try {
          const { email, password } = values
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
          // location.replace('/home')
        } catch (error) {
          console.log(error.message)
        }
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} className='signForm'>
            <h2>Iniciar sesión</h2>
            <input
              type='email'
              placeholder='Correo electronico'
              required
              onChange={handleChange}
              name='email'
            />
            <input
              type='password'
              placeholder='Contraseña'
              required
              onChange={handleChange}
              name='password'
            />
            <button className='signForm__button' disabled={isSubmitting}>
              Ingresar
            </button>
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
      }}
    </Formik>
  )
}
