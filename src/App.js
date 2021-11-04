import React from 'react'
import { Route } from 'wouter'
import { useAuth0 } from '@auth0/auth0-react'
import Main from './pages/Main'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      {!isAuthenticated ? (
        <Route path='/' component={Main} />
      ) : (
        <>
          <Route path='/' component={Home} />
          <Route path='/profile/:id' component={Profile} />
        </>
      )}
    </>
  )
}
