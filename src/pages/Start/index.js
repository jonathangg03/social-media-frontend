import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('auth')
    navigate('/')
  }

  useEffect(() => {
    //Para redirigir a / sí no hay un auth en localStorage
    if (!localStorage.getItem('auth')) {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <h1>Estamos logueados</h1>
      <button onClick={logout}>Deslogueo</button>
    </div>
  )
}
