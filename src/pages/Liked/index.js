import { useContext, useEffect, useState } from 'react'
import Context from '../../Context/authContext'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import getProfile from '../../services/getProfile'
import './index.scss'

export default function Liked() {
  const { token } = useContext(Context)
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    if (token) {
      const profile = await getProfile({ token: token })
      setProfile(profile)
    }
  }, [token])

  return (
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
        <IdeasList ideas={[]} />
        <Menu />
      </div>
    </Layout>
  )
}
