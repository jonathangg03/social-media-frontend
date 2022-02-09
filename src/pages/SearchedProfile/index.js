import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import IdeasList from '../../components/IdeasList'
import Menu from '../../components/Menu'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import Context from '../../Context/authContext'
import getProfile from '../../services/getProfile'
import followUser from '../../services/followUser'
import Ellipse1 from '../../../public/Desktop/Ellipse1.png'
import Ellipse2 from '../../../public/Desktop/Ellipse2.png'
import useGetIdeas from '../../hooks/useGetIdeas'
import useGetProfile from '../../hooks/useGetProfile'
import '../../styles/profiles.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function SearchedProfile() {
  const [followed, setFollowed] = useState(null)
  const { token, _id } = useContext(Context)
  const { id } = useParams()
  const { fetchState, ideas } = useGetIdeas({ user: id })
  const { profile } = useGetProfile({ id })

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
    setFollowed(FETCH_STATES.LOADING)
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
        <button
          className={`profile__follow-button ${
            followed === true ? 'followed' : ''
          }`}
          onClick={handleFollow}
          disabled={followed === FETCH_STATES.LOADING}
        >
          {followed && followed !== FETCH_STATES.LOADING && 'Dejar de seguir'}
          {followed === FETCH_STATES.LOADING && 'Cargando...'}
          {!followed && 'Seguir'}
        </button>
        <IdeasList ideas={ideas || []} />
        <Menu />
        <img src={Ellipse1} className='profile__ellipsed a' />
        <img src={Ellipse2} className='profile__ellipsed b' />
      </div>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
