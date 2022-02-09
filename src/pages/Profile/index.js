import { useContext } from 'react'
import Hero from '../../components/Hero'
import IdeasList from '../../components/IdeasList'
import Menu from '../../components/Menu'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import Context from '../../Context/authContext'
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

export default function Profile() {
  const { token, _id } = useContext(Context)
  const { profile } = useGetProfile({ token })
  const { fetchState, ideas } = useGetIdeas({ user: _id })

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
        <IdeasList ideas={ideas || []} />
        <Menu />
        <img src={Ellipse1} className='profile__ellipsed a' />
        <img src={Ellipse2} className='profile__ellipsed b' />
      </div>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
