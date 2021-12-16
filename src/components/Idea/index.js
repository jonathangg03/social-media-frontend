import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineDotsHorizontal
} from 'react-icons/hi'
import Modal from '../Modal'
import DeleteModalContent from '../DeleteModalContent'
import ProfilePicture from '../../../public/ProfilePicture1.png'
import './index.scss'

export default function Idea({
  name,
  content,
  date,
  likes,
  image,
  id_Persona
}) {
  const [liked, setLiked] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const location = useLocation()
  const params = useParams()

  const handleClickLike = () => {
    setLiked(!liked)
  }

  const handleOpenMenu = (e) => {
    setOpenMenu(!openMenu)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <li className='idea'>
      <div className='idea__header'>
        <figure className='idea__header-image'>
          <img src={ProfilePicture} alt={name} />
        </figure>
        <h3>{name}</h3>
        {location.pathname.includes('/profile') && params.id === id_Persona && (
          <div className='idea__header-options' onClick={handleOpenMenu}>
            <HiOutlineDotsHorizontal />
          </div>
        )}
      </div>
      <p className='idea__content'>{content}</p>
      {image && (
        <div className='idea__image'>
          <img src={image} />
        </div>
      )}
      <div className='idea__footer'>
        <p className='idea__footer-date'>{date}</p>
        <div className='idea__footer-likes'>
          <button
            onClick={handleClickLike}
            className={`idea__footer-like ${liked ? 'like' : ''}`}
          >
            {liked ? <HiHeart /> : <HiOutlineHeart />}
          </button>
          {likes.length > 0 && <p>{likes.length}</p>}
        </div>
      </div>
      {location.pathname.includes('/profile') && params.id === id_Persona && (
        <>
          <section className={`idea__menu ${openMenu && 'show-menu'}`}>
            <section>
              <button>Editar</button>
              <button onClick={handleOpenModal}>Eliminar</button>
            </section>
            <button onClick={handleOpenMenu}>Cerrar menú</button>
          </section>
        </>
      )}
      <Modal openModal={openModal}>
        <DeleteModalContent onClose={handleOpenModal} />
      </Modal>
    </li>
  )
}
