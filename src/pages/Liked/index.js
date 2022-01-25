import { useContext, useEffect, useState } from 'react'
import Context from '../../Context/authContext'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import getProfile from '../../services/getProfile'
import getLikedIdeas from '../../services/getLikedIdeas'
import './index.scss'

export default function Liked() {
  const { token, _id } = useContext(Context)
  const [profile, setProfile] = useState({})
  const [ideas, setIdeas] = useState([])

  useEffect(async () => {
    if (token) {
      const profile = await getProfile({ token: token })
      setProfile(profile)
    }
  }, [token])

  useEffect(async () => {
    if (_id) {
      const ideas = await getLikedIdeas({ id: _id })
      setIdeas(ideas)
    }
  }, [_id])

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
        <IdeasList ideas={ideas} />
        <Menu />
      </div>
    </Layout>
  )
}
