import Ellipse from '../../../public/Home/Ellipse1.png'
import Logo from '../Logo'
import './index.scss'

export default function Layout({ children }) {
  return (
    <div className='Layout'>
      <Logo />
      {children}
      <img src={Ellipse} className='Layout__ellipse' />
    </div>
  )
}
