import { useNavigate } from 'react-router-dom'
import useInputValue from '../../hooks/useInputValue'
import '../../styles/signForms.scss'

const default_user = {
  email: 'test@test.com',
  password: '123'
}

export default function () {
  const navigate = useNavigate()

  const emailInput = useInputValue({
    value: '',
    name: 'email',
    type: 'email',
    placeholder: 'Correo electronico'
  })

  const passwordInput = useInputValue({
    value: '',
    name: 'password',
    type: 'password',
    placeholder: 'Contraseña'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = default_user
    const { value: emailV } = emailInput
    const { value: passV } = passwordInput

    if (email === emailV && password === passV) {
      localStorage.setItem('auth', true)
      navigate('/home')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='formSignUp'>
      <input {...emailInput} />
      <input {...passwordInput} />
      <button>Ingresar</button>
    </form>
  )
}
