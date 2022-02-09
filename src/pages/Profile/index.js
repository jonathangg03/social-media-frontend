import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import IdeasList from '../../components/IdeasList'
import Menu from '../../components/Menu'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import Context from '../../Context/authContext'
import getIdeas from '../../services/getIdeas'
import getProfile from '../../services/getProfile'
import getUser from '../../services/getUser'
import followUser from '../../services/followUser'
import Ellipse1 from '../../../public/Desktop/Ellipse1.png'
import Ellipse2 from '../../../public/Desktop/Ellipse2.png'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Profile() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.LOADING) //Para que desde el primer render esté el loading
  const [followed, setFollowed] = useState(null)
  const [ideas, setIdeas] = useState([])
  const [profile, setProfile] = useState({})
  const { id } = useParams()
  const { token, _id } = useContext(Context)

  useEffect(async () => {
    //Sí estamos en nuestro perfil
    if (_id && token && !id) {
      setFetchState(FETCH_STATES.LOADING)
      const ideasResponse = await getIdeas({ id: _id })
      const profileResponse = await getProfile({ token })
      setIdeas(ideasResponse)
      setProfile(profileResponse)
      setFetchState(FETCH_STATES.COMPLETE)
    }
  }, [_id, token, id])

  useEffect(async () => {
    //Sí estamos en el perfil de otro usuario
    if (id) {
      setFetchState(FETCH_STATES.LOADING)
      const profileResponse = await getUser({ id })
      const ideasResponse = await getIdeas({ id })
      setProfile(profileResponse)
      setIdeas(ideasResponse)
      setFetchState(FETCH_STATES.COMPLETE)
    }
  }, [id])

  useEffect(async () => {
    //Saber sí seguimos al usuario de quien vemos el perfil
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
        <img src={Ellipse1} className='profile__ellipsed a' />
        <img src={Ellipse2} className='profile__ellipsed b' />
      </div>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
