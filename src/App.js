import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Profile from './pages/Profile'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'
import NewIdea from './pages/NewIdea'
import NotFound from './pages/NotFound'
import Liked from './pages/Liked'
import EditProfile from './pages/EditProfile'
import Home from './pages/Home'
import SearchPeople from './pages/SearchPeople'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
        <Route path='/:id/profile' element={<Profile />} />
        <Route path='/:id/profile/edit' element={<EditProfile />} />
        <Route path='/:id/liked' element={<Liked />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/search' element={<SearchPeople />} />
        <Route path='/:id/newIdea' element={<NewIdea />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
