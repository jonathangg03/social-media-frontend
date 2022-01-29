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
import DeleteIdea from './pages/DeleteIdea'
import NotFound from './pages/NotFound'
import Context from './Context/authContext'

export default function App() {
  const { token } = useContext(Context)
  //A LA PRIMERA, NO SE MUESTRAN LOS DATOS
  //POSIBLEMENTE PORQUE AL INICIO, EL CONTEXT NO TIENE LA COOKIE, Y AUN ASÍ LA ESTA
  //iNTENTANDO LEER

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
            <Route path='/search/:id' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/newIdea' element={<NewIdea />} />
            <Route path='/delete/:id' element={<DeleteIdea />} />
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
