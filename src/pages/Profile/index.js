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

//ARREGLAR BOG DE NO MOSTRAR NOMBRE NI IDEAS

export default function Profile() {
  const location = useLocation()
  const { profilePhotoUrl, coverPhotoUrl, name, description, _id } =
    useContext(Context)
  const [followed, setFollowed] = useState(false)
  const [ideas, setIdeas] = useState([])

  useEffect(async () => {
    if (_id) {
      const response = await getIdeas({ id: _id })
      console.log(response)
      setIdeas(response)
    }
  }, [_id])

  const handleFollow = () => {
    setFollowed(!followed)
  }

  return (
    <div className='profile'>
      <Hero
        profilePicture={profilePhotoUrl}
        backgroundPicture={coverPhotoUrl}
        name={name}
        description={description}
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
