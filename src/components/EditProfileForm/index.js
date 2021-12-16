import './index.scss'
import { FaCamera } from 'react-icons/fa'
import Cat from '../../../public/cat.jpg'
import ProfilePicture from '../../../public/ProfilePicture1.png'
import { useState } from 'react/cjs/react.development'
const mockProfile = {
  profilePicture: ProfilePicture,
  cover: Cat,
  name: 'Jonathan García González',
  description: 'Esto es tu descripción'
}

export default function editProfileForm() {
  const [profilePicture, setProfilePicture] = useState(
    mockProfile.profilePicture
  )
  const [coverPicture, setCoverPicture] = useState(mockProfile.cover)

  const handleChangeProfilePicture = (e) => {
    const file = e.target.files[0]
    if (file) {
      var reader = new FileReader()
      reader.onload = function (event) {
        setProfilePicture(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChangeCoverPicture = (e) => {
    const file = e.target.files[0]
    if (file) {
      var reader = new FileReader()
      reader.onload = function (event) {
        setCoverPicture(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form className='editProfileForm'>
      <div className='editProfileForm-item'>
        <img src={profilePicture} />
        <div className='editProfileForm-item-camera'>
          <p>Actualizar</p>
          <FaCamera />
        </div>
        <input
          type='file'
          onChange={handleChangeProfilePicture}
          className='editProfileForm__file-input'
          id='profilePicture'
        />
      </div>
      <div className='editProfileForm-item cover'>
        <img src={coverPicture} />
        <div className='editProfileForm-item-camera cover'>
          <p>Actualizar</p>
          <FaCamera />
        </div>
        <input
          type='file'
          onChange={handleChangeCoverPicture}
          className='editProfileForm__file-input cover'
          id='profilePicture'
        />
      </div>
      <input type='text' placeholder='Nombre' />
      <input type='text' placeholder='Descripción' />
      <button>Actualizar</button>
    </form>
  )
}
