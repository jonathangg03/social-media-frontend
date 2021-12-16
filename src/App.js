import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
// import Profile from './pages/Profile'
// import NewIdea from './pages/NewIdea'
// import NotFound from './pages/NotFound'
// import Liked from './pages/Liked'
// import EditProfile from './pages/EditProfile'
// import Search from './pages/Search'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/:id/profile' element={<Profile />} />
        <Route path='/:id/profile/edit' element={<EditProfile />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:id/' element={<Profile />} />
        <Route path='/:id/newIdea' element={<NewIdea />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
