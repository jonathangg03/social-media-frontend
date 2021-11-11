import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Start from './pages/Start'
import Profile from './pages/Profile'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'
import NewIdea from './pages/NewIdea'
import NotFound from './pages/NotFound'
import Liked from './pages/Liked'
import EditProfile from './pages/EditProfile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Start />} />
        <Route path='/:id/profile' element={<Profile />} />
        <Route path='/:id/profile/edit' element={<EditProfile />} />
        <Route path='/:id/liked' element={<Liked />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/:id/newIdea' element={<NewIdea />} />
        <Route component={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
