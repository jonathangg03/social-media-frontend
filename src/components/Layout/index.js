import { useContext } from 'react'
import Ellipse from '../../../public/Home/Ellipse1.png'
import Ellipse1 from '../../../public/Desktop/Ellipse1.png'
import Ellipse2 from '../../../public/Desktop/Ellipse2.png'
import Logo from '../Logo'
import Context from '../../Context/authContext'
import Spinner from '../Spinner'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Layout({ children }) {
  const { fetchState } = useContext(Context)

  return (
    <div className='Layout'>
      <Logo />
      {children}
      <img src={Ellipse} className='Layout__ellipse' />
      <img src={Ellipse1} className='Layout__ellipsed a' />
      <img src={Ellipse2} className='Layout__ellipsed b' />
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </div>
  )
}
