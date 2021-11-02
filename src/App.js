import React from 'react'
import { Route } from 'wouter'
import Layout from './components/Layout'
import Home from './pages/Home'

export default function App() {
  return (
    <Layout>
      <Route path='/' component={Home} />
    </Layout>
  )
}
