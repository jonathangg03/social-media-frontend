import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
  const { logout } = useAuth0()
  return (
    <div>
      <h1>Estamos logueados</h1>
      <button onClick={logout}>Deslogueo</button>
    </div>
  )
}
