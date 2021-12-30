import { useState, useContext } from 'react'
import { HiMenu } from 'react-icons/hi'
import { useParams, useNavigate } from 'react-router-dom'
import Ellipse1 from '../../../public/Profile/Ellipse1.png'
import Ellipse2 from '../../../public/Profile/Ellipse2.png'
import Context from '../../Context/authContext'
import './index.scss'

export default function Hero({
  profilePicture,
  backgroundPicture,
  name,
  description,
  id
}) {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()
  const { setJwt } = useContext(Context)

  const handleOpenMenu = (e) => {
    setOpenMenu(!openMenu)
  }

  const handleNavigate = (e) => {
    if (e.target.textContent === 'Editar perfil') {
      navigate('/2/profile/edit')
    }

    if (e.target.textContent === 'Cerrar sesión') {
      document.cookie = 'token=; max-age=0'
      setJwt(null)
      navigate('/')
    }
  }

  const params = useParams()
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <div className='hero__background-picture'>
          <img src={backgroundPicture} alt={`${name} background picture`} />
        </div>
        <div className='hero__information'>
          <figure className='hero__information-picture'>
            <img src={profilePicture} alt={name} />
          </figure>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        {params.id === id && (
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
