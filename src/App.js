import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
import Liked from './pages/Liked'
import Search from './pages/Search'
import Profile from './pages/Profile'
import { useContext } from 'react'
import EditProfile from './pages/EditProfile'
import NewIdea from './pages/NewIdea'
import NotFound from './pages/NotFound'
import Context from './Context/authContext'

export default function App() {
  const { token } = useContext(Context)

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/liked' element={<Liked />} />
            <Route path='/search' element={<Search />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/search/:id/' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/:id/newIdea' element={<NewIdea />} />
            <Route path='*' element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}
