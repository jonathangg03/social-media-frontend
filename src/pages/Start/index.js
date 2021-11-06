import React from 'react'
import { useLocation } from 'wouter'

export default function Home() {
  const [location, setLocation] = useLocation()

  const logout = () => {
    localStorage.removeItem('auth')
    setLocation('/home')
  }
  return (
    <div>
      <h1>Estamos logueados</h1>
      <button onClick={logout}>Deslogueo</button>
    </div>
  )
}
