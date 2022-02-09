import ProfileEditForm from '../../components/EditProfileForm'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import Head from '../../components/Head'
import Ellipse from '../../../public/EditProfile/Ellipse1.png'
import Ellipse1 from '../../../public/Desktop/Ellipse1.png'
import Ellipse2 from '../../../public/Desktop/Ellipse2.png'
import './index.scss'

export default function EditProfile() {
  return (
    <>
      <Head
        title='Editar perfil'
        desc='Página para editar el perfil del usuario'
      />
      <div className='editProfile'>
        <Logo />
        <ProfileEditForm />
        <Menu />
        <img src={Ellipse} className='ellipse' />
        <img src={Ellipse2} className='editProfile__ellipsed b' />
      </div>
      <img src={Ellipse1} className='editProfile__ellipsed a' />
    </>
  )
}
