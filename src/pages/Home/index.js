import { useContext } from 'react'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import Context from '../../Context/authContext'
import useGetProfile from '../../hooks/useGetProfile'
import useGetIdeas from '../../hooks/useGetIdeas'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Home() {
  const { token, _id } = useContext(Context)
  const { profile } = useGetProfile({ token })
  const { fetchState, ideas } = useGetIdeas({ id: _id })

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
