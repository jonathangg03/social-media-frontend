import { useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaGripHorizontal, FaTimes } from 'react-icons/fa'
import Hero from '../../components/Hero'
import IdeasList from '../../components/IdeasList'
import Menu from '../../components/Menu'
import Cat from '../../../public/cat.jpg'
import ProfilePicture from '../../../public/ProfilePicture1.png'
import Context from '../../Context/authContext'
import './index.scss'
const IDEAS = [
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    id_Persona: '1',
    _id: 1
  },
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    id_Persona: '1',
    image: Cat,
    _id: 2
  },
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    id_Persona: '1',
    _id: 3
  },
  {
    name: 'Ana Campos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
    date: 'Hace 12 horas',
    likes: ['a', 'a', 'a', 'a'],
    id_Persona: '1',
    _id: 4
  }
]

export default function Profile() {
  const navigate = useNavigate()
  const location = useLocation()
  const { profile } = useContext(Context)
  const [openOptions, setOpenOptions] = useState(false)
  const [followed, setFollowed] = useState(false)

  const handleClickOpenOptions = () => {
    setOpenOptions(!openOptions)
  }

  const handleClickLogout = () => {
    localStorage.removeItem('auth')
    navigate('/')
  }

  const handleFollow = () => {
    setFollowed(!followed)
  }

  return (
    <div className='profile'>
      {console.log(profile)}
      <Hero
        profilePicture={profile.profilePhotoUrl || ''}
        backgroundPicture={profile.coverPhotoUrl || ''}
        name={profile.name || ''}
        description={profile.description || ''}
        id={profile._id || ''}
      />
      {location.pathname.includes('/search') && (
        <button
          className={`profile__follow-button ${followed ? 'followed' : ''}`}
          onClick={handleFollow}
        >
          {followed ? 'Siguiendo' : 'Seguir'}
        </button>
      )}
      <IdeasList ideas={IDEAS} />
      <Menu />
      <button
        className='profile__optionsButton'
        onClick={handleClickOpenOptions}
      >
        {openOptions ? <FaTimes /> : <FaGripHorizontal />}
      </button>
      <div className='profile__optionsHandler'>
        <div className={`profile__options ${openOptions ? 'showOptions' : ''}`}>
          <Link to='/2/profile/edit'>Editar perfil</Link>
          <button onClick={handleClickLogout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  )
}
