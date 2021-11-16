import { useState } from 'react'
import { FaEllipsisH, FaHeart, FaRegHeart } from 'react-icons/fa'
import './idea.scss'

export default function Idea({ title, content, date }) {
  const [liked, setLiked] = useState(false)

  const handleClickLike = () => {
    setLiked(!liked)
  }

  return (
    <li class='idea'>
      <div className='idea__options'>
        <FaEllipsisH />
      </div>
      <p className='idea__date'>{date}</p>
      <h3>{title}</h3>
      <p className='idea__content'>{content}</p>
      <div className='idea__friends-options'>
        <button onClick={handleClickLike} className={liked ? 'like' : ''}>
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </li>
  )
}
