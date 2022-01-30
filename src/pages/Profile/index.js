import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import IdeasList from '../../components/IdeasList'
import Menu from '../../components/Menu'
import Head from '../../components/Head'
import Context from '../../Context/authContext'
import getIdeas from '../../services/getIdeas'
import getProfile from '../../services/getProfile'
import getUser from '../../services/getUser'
import followUser from '../../services/followUser'
import './index.scss'

export default function Profile() {
  const [followed, setFollowed] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [profile, setProfile] = useState({})
  const { id } = useParams()
  const { token, _id } = useContext(Context)

  useEffect(async () => {
    if (_id && token && !id) {
      const ideasResponse = await getIdeas({ id: _id })
      const profileResponse = await getProfile({ token })
      setIdeas(ideasResponse)
      setProfile(profileResponse)
    }
  }, [_id, token, id])

  useEffect(async () => {
    if (id) {
      const profileResponse = await getUser({ id })
      const ideasResponse = await getIdeas({ id })
      setProfile(profileResponse)
      setIdeas(ideasResponse)
    }
  }, [id])

  useEffect(async () => {
    if (id && token) {
      const profileResponse = await getProfile({ token })
      if (profileResponse.followedPeople.includes(id)) {
        setFollowed(true)
      } else {
        setFollowed(false)
      }
    }
  }, [id, token])

  const handleFollow = async () => {
    try {
      await followUser({ userId: _id, toFollow: id })
      setFollowed(!followed)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <Head title='Perfil' desc='Perfil del usuario.' />
      <div className='profile'>
        <Hero
          profilePicture={profile.profilePhotoUrl}
          backgroundPicture={profile.coverPhotoUrl}
          name={profile.name}
          description={profile.description}
        />
        {id && followed !== null && (
          <button
            className={`profile__follow-button ${
              followed === true ? 'followed' : ''
            }`}
            onClick={handleFollow}
          >
            {followed ? 'Siguiendo' : 'Seguir'}
          </button>
        )}
        <IdeasList ideas={ideas || []} />
        <Menu />
      </div>
    </>
  )
}
