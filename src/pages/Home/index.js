import { useContext, useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import Context from '../../Context/authContext'
import getProfile from '../../services/getProfile'
import getFollowedIdeas from '../../services/getFollowedIdeas'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Home() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)
  const [profile, setProfile] = useState({})
  const [ideas, setIdeas] = useState([])
  const { token, _id } = useContext(Context)

  useEffect(async () => {
    if (token) {
      const profile = await getProfile({ token: token })
      setProfile(profile)
    }
  }, [token])

  useEffect(async () => {
    if (_id) {
      setFetchState(FETCH_STATES.LOADING)
      const ideas = await getFollowedIdeas({ id: _id })
      setIdeas(ideas)
      setFetchState(FETCH_STATES.COMPLETE)
    }
  }, [_id])

  return (
    <>
      <Head
        title='Pagína principal'
        desc='Página que se mostrará cuando la persona haya completado el ingreso.'
      />
      <Layout>
        <div className='Home'>
          <figure className='Home__profilePicture'>
            {profile.profilePhotoUrl === undefined && <img src={null} />}
            {profile.profilePhotoUrl === '' && (
              <img src={defaultProfilePhoto} alt={profile.name} />
            )}
            {profile.profilePhotoUrl && profile.profilePhotoUrl.length > 0 && (
              <img src={profile.profilePhotoUrl} alt={profile.name} />
            )}
          </figure>
          <IdeasList ideas={ideas} />
          <Menu />
        </div>
      </Layout>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
