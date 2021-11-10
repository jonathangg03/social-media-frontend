import React from 'react'
import { Route, Switch } from 'wouter'
import Main from './pages/Main'
import Start from './pages/Start'
import Profile from './pages/Profile'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'
import NewIdea from './pages/NewIdea'
import NotFound from './pages/NotFound'
import Liked from './pages/Liked'

export default function App() {
  return (
    <Switch>
      <Route path='/' component={Main} />
      <Route path='/home' component={Start} />
      <Route path='/:id/profile' component={Profile} />
      <Route path='/:id/liked' component={Liked} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/:id/newIdea' component={NewIdea} />
      <Route component={NotFound} />
    </Switch>
  )
}
