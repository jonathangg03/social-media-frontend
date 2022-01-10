import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaGripHorizontal, FaTimes } from 'react-icons/fa'
import Hero from '../../components/Hero'
import IdeasList from '../../components/IdeasList'
import Menu from '../../components/Menu'
import Cat from '../../../public/cat.jpg'
import Context from '../../Context/authContext'
import getIdeas from '../../services/getIdeas'
import './index.scss'
import getProfile from '../../services/getProfile'

//ARREGLAR BOG DE NO MOSTRAR NOMBRE NI IDEAS

export default function Profile() {
  const location = useLocation()
  const { token, _id } = useContext(Context)
  const [followed, setFollowed] = useState(false)
  const [ideas, setIdeas] = useState([])
  const [profile, setProfile] = useState({
    profilePhotoUrl: '',
    coverPhotoUrl: '',
    name: '',
    description: ''
  })

  useEffect(async () => {
    if (_id && token) {
      const ideasResponse = await getIdeas({ id: _id })
      const profileResponse = await getProfile({ token })
      console.log(profileResponse)
      setIdeas(ideasResponse)
      setProfile(profileResponse)
    }
  }, [_id, token])

  const handleFollow = () => {
    setFollowed(!followed)
  }

  return (
    <div className='profile'>
      {console.log(_id)}
      <Hero
        profilePicture={profile.profilePhotoUrl}
        backgroundPicture={profile.coverPhotoUrl}
        name={profile.name}
        description={profile.description}
        id={_id}
      />
      {location.pathname.includes('/search') && (
        <button
          className={`profile__follow-button ${followed ? 'followed' : ''}`}
          onClick={handleFollow}
        >
          {followed ? 'Siguiendo' : 'Seguir'}
        </button>
      )}
      <IdeasList ideas={ideas || []} />
      <Menu />
    </div>
  )
}
