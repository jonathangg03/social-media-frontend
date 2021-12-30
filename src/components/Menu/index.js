import { HiHome, HiHeart, HiPlus, HiSearch, HiUser } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

export default function Menu() {
  const location = useLocation()
  return (
    <ul className='menu'>
      <li className='menu__item'>
        <Link
          to='/home'
          className={
            location.pathname.includes('/home') || location.pathname === '/'
              ? 'actual__visited'
              : ''
          }
        >
          <HiHome />
        </Link>
      </li>
      <li className='menu__item'>
        <Link
          to='/liked'
          className={
            location.pathname.includes('/liked') ? 'actual__visited' : ''
          }
        >
          <HiHeart />
        </Link>
      </li>
      <li
        className={`menu__item plus ${
          location.pathname.includes('/newIdea') ? 'visited' : ''
        }`}
      >
        <Link
          to='/2/newIdea'
          className={
            location.pathname.includes('/newIdea') ? 'actual__visited' : ''
          }
        >
          <HiPlus />
        </Link>
      </li>
      <li className='menu__item'>
        <Link
          to='/search'
          className={
            location.pathname.includes('/search') ? 'actual__visited' : ''
          }
        >
          <HiSearch />
        </Link>
      </li>
      <li className='menu__item'>
        <Link
          to='/1/profile'
          className={
            location.pathname.includes('/profile') ? 'actual__visited' : ''
          }
        >
          <HiUser />
        </Link>
      </li>
    </ul>
  )
}
