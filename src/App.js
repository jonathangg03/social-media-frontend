import React from 'react'
import { Route } from 'wouter'
import Layout from './components/Layout'
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

export default function App() {
  return (
    <>
      <Layout>
        <Route path='/' component={Main} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/profile/:id' component={Profile} />
      </Layout>
    </>
  )
}
