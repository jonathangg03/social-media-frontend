import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import Main from './pages/Main'
import Start from './pages/Start'
import Profile from './pages/Profile'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'

export default function App() {
  return (
    <>
      <Route path='/' component={Main} />
      <Route path='/home' component={Start} />
      <Route path='/profile/:id' component={Profile} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
    </>
  )
}
