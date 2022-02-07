import { useContext } from 'react'
import Context from '../../Context/authContext'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import useGetIdeas from '../../hooks/useGetIdeas'
import useGetProfile from '../../hooks/useGetProfile'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Liked() {
  const { token, _id } = useContext(Context)
  const { profile } = useGetProfile({ token })
  const { ideas, fetchState } = useGetIdeas({ id: _id, liked: true })

  return (
    <>
      <Head
        title='Publicaciones que te gustaron'
        desc='Página que muestra las publicaciones que le han gustado al usuario.'
      />
      <Layout>
        <div className='Liked'>
          <h2>Publicaciones que te gustaron</h2>
          <figure className='Liked__profilePicture'>
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
