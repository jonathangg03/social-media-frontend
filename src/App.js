import React, { useEffect, useState } from 'react'
import { Route } from 'wouter'
import Main from './pages/Main'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'

export default function App() {
  const [auth, setAuth] = useState('')

  useEffect(() => {
    setAuth(localStorage.getItem('auth'))
  }, [localStorage.getItem('auth')])
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/profile/:id' component={Profile} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
    </>
  )
}
