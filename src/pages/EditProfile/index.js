import ProfileEditForm from '../../components/EditProfileForm'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import Ellipse from '../../../public/EditProfile/Ellipse1.png'
import './index.scss'

/* 

      <Link to='/2/profile' className='editProfile__link'>
        <p>
          <FaChevronLeft /> <span>Volver</span>
        </p>
      </Link>

*/

export default function EditProfile() {
  return (
    <div className='editProfile'>
      <Logo />
      <ProfileEditForm />
      <Menu />
      <img src={Ellipse} className='ellipse' />
    </div>
  )
}
