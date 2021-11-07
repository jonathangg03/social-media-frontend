import React, { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function Home() {
  const [location, setLocation] = useLocation()

  const logout = () => {
    localStorage.removeItem('auth')
    setLocation('/')
  }

  useEffect(() => {
    //Para redirigir a / sí no hay un auth en localStorage
    if (!localStorage.getItem('auth')) {
      setLocation('/')
    }
  }, [])

  return (
    <div>
      <h1>Estamos logueados</h1>
      <button onClick={logout}>Deslogueo</button>
    </div>
  )
}
