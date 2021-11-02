import React from 'react'
import { Route } from 'wouter'
import Layout from './components/Layout'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

export default function App() {
  return (
    <>
      <Layout>
        <Route path='/' component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/profile/:id' component={Profile} />
      </Layout>
    </>
  )
}
