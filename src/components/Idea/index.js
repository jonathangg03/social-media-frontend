import { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineDotsHorizontal
} from 'react-icons/hi'
import Context from '../../Context/authContext'
import Modal from '../Modal'
import DeleteModalContent from '../DeleteModalContent'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import likePost from '../../services/likePost'
import './index.scss'
import useTimeAgo from '../../hooks/useTimeAgo'

export default function Idea({
  content,
  date,
  likes,
  user,
  imageUrl,
  _id: postId
}) {
  const [liked, setLiked] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const newDate = useTimeAgo(date)
  const { _id } = useContext(Context)
  const location = useLocation()
  const params = useParams()
  const [likesPost, setLikesPost] = useState(likes.length)

  useEffect(() => {
    if (_id && likes.includes(_id)) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }, [_id])

  const handleClickLike = async () => {
    await likePost({ postId, userId: _id })
    if (liked) {
      setLikesPost(likesPost - 1)
    } else {
      setLikesPost(likesPost + 1)
    }
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
          {user.profilePhotoUrl === undefined && <img src={null} />}
          {user.profilePhotoUrl === '' && (
            <img src={defaultProfilePhoto} alt={user.name} />
          )}
          {user.profilePhotoUrl && user.profilePhotoUrl.length > 0 && (
            <img src={user.profilePhotoUrl} alt={user.name} />
          )}
        </figure>
        <h3>{user.name}</h3>
        {location.pathname.includes('/profile') && params.id === user.id && (
          <div className='idea__header-options' onClick={handleOpenMenu}>
            <HiOutlineDotsHorizontal />
          </div>
        )}
      </div>
      <p className='idea__content'>{content}</p>
      {imageUrl && (
        <div className='idea__image'>
          <img src={imageUrl} />
        </div>
      )}
      <div className='idea__footer'>
        <p className='idea__footer-date'>{newDate}</p>
        <div className='idea__footer-likes'>
          <button
            onClick={handleClickLike}
            className={`idea__footer-like ${liked ? 'like' : ''}`}
          >
            {liked ? <HiHeart /> : <HiOutlineHeart />}
          </button>
          {likesPost > 0 && <p>{likesPost}</p>}
        </div>
      </div>
      {location.pathname.includes('/profile') && params.id === user._id && (
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
