import { useState, useContext } from 'react'
import { HiMenu } from 'react-icons/hi'
import { useParams, useNavigate } from 'react-router-dom'
import Ellipse1 from '../../../public/Profile/Ellipse1.png'
import Ellipse2 from '../../../public/Profile/Ellipse2.png'
import Context from '../../Context/authContext'
import DefaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import DefaultCoverPhoto from '../../../public/defaultCoverPhoto.jpg'
import './index.scss'

export default function Hero({
  profilePicture,
  backgroundPicture,
  name,
  description
}) {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { setJwt, _id } = useContext(Context)

  const handleOpenMenu = (e) => {
    setOpenMenu(!openMenu)
  }

  const handleNavigate = (e) => {
    if (e.target.textContent === 'Editar perfil') {
      navigate('/profile/edit')
    }

    if (e.target.textContent === 'Cerrar sesión') {
      try {
        document.cookie = 'token=; max-age=0'
        setJwt(null)
        navigate('/')
      } catch (error) {
        console.log('Cookie not deleted: ', error.message)
      }
    }
  }

  // const params = useParams()
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <div className='hero__background-picture'>
          {backgroundPicture === undefined && <img src={null} />}
          {backgroundPicture === '' && (
            <img src={DefaultCoverPhoto} alt={`${name} cover picture`} />
          )}
          {backgroundPicture && backgroundPicture.length > 0 && (
            <img src={backgroundPicture} alt={name} />
          )}
        </div>
        <div className='hero__information'>
          <figure className='hero__information-picture'>
            {profilePicture === undefined && <img src={null} />}
            {profilePicture === '' && (
              <img src={DefaultProfilePhoto} alt={name} />
            )}
            {profilePicture && profilePicture.length > 0 && (
              <img src={profilePicture} alt={name} />
            )}
          </figure>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        {!id && (
          <>
            <div className='hero__menu-activator' onClick={handleOpenMenu}>
              <HiMenu />
            </div>
            <section className={`hero__menu ${openMenu && 'show-menu'}`}>
              <section>
                <button onClick={handleNavigate}>Editar perfil</button>
                <button onClick={handleNavigate}>Cerrar sesión</button>
              </section>
              <button onClick={handleOpenMenu}>Cerrar menú</button>
            </section>
          </>
        )}
      </div>
      <img src={Ellipse1} className='ellipse a' />
      <img src={Ellipse2} className='ellipse b' />
    </div>
  )
}
