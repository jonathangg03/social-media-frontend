import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import ProfileEditForm from '../../components/EditProfileForm'
import Menu from '../../components/Menu'
import './editProfile.scss'

export default function EditProfile() {
  return (
    <div className='editProfile'>
      <h2>Selecciona los elementos que deseas cambiar en tu perfil</h2>
      <ProfileEditForm />
      <Link to='/2/profile' className='editProfile__link'>
        <p>
          <FaChevronLeft /> <span>Volver</span>
        </p>
      </Link>
      <Menu />
    </div>
  )
}
