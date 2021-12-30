import { useContext } from 'react'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import Cat from '../../../public/cat.jpg'
import Context from '../../Context/authContext'
import './index.scss'

const IDEAS = []

export default function Home() {
  const { profilePhotoUrl } = useContext(Context)

  return (
    <Layout>
      <div className='Home'>
        <div className='Home__profilePicture'>
          <img
            src={profilePhotoUrl || defaultProfilePhoto}
            alt='Maria Lopez Gomez'
          />
        </div>
        <IdeasList ideas={IDEAS} />
        <Menu />
      </div>
    </Layout>
  )
}
