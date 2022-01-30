import ProfileEditForm from '../../components/EditProfileForm'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import Head from '../../components/Head'
import Ellipse from '../../../public/EditProfile/Ellipse1.png'
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
      </div>
    </>
  )
}
