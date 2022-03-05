import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import useTimeAgo from '../../hooks/useTimeAgo'
import LikedButton from '../LikedButton'
import IdeaMenu from '../IdeaMenu'
import './index.scss'

export default function Idea({
  content,
  date,
  likes,
  user,
  imageUrl,
  _id: postId,
  handleOpenMenu,
  openMenu,
  _id,
  location
}) {
  const newDate = useTimeAgo(date)

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
        {location?.pathname.includes('/profile') && (
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
        <LikedButton likes={likes} userId={_id} postId={postId} />
      </div>
      {location?.pathname.includes('/profile') && (
        <IdeaMenu
          postId={postId}
          openMenu={openMenu}
          handleOpenMenu={handleOpenMenu}
        />
      )}
    </li>
  )
}
