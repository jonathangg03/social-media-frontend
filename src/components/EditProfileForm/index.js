import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import Context from '../../Context/authContext'
import getProfile from '../../services/getProfile'
import { FaCamera } from 'react-icons/fa'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function editProfileForm() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.LOADING) //Para que desde el primer render esté el loading
  const [profile, setProfile] = useState({
    name: '',
    description: '',
    profilePhotoUrl: '',
    coverPhotoUrl: ''
  })
  const [profilePicture, setProfilePicture] = useState('')
  const [coverPicture, setCoverPicture] = useState('')
  const navigate = useNavigate()
  const { token } = useContext(Context)

  useEffect(async () => {
    if (token) {
      setFetchState(FETCH_STATES.LOADING)
      const user = await getProfile({ token })
      setProfile(user)
      setFetchState(FETCH_STATES.COMPLETE)
    }
  }, [token])

  useEffect(() => {
    setProfilePicture(profile.profilePhotoUrl)
  }, [profile.profilePhotoUrl])

  useEffect(() => {
    setCoverPicture(profile.coverPhotoUrl)
  }, [profile.coverPhotoUrl])

  const handleChangeProfilePicture = (e) => {
    //Para mostrar la imagen en la página
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
    //Para mostrar la imagen en la página
    const file = e.target.files[0]
    if (file) {
      var reader = new FileReader()
      reader.onload = function (event) {
        setCoverPicture(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputTextChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setFetchState(FETCH_STATES.LOADING)
      const fd = new FormData()
      fd.append('name', profile.name)
      fd.append('description', profile.description)
      fd.append('profilePhoto', e.target[0].files[0])
      fd.append('coverPhoto', e.target[1].files[0])
      await axios.patch(`http://localhost:3001/user/${profile._id}`, fd)
      setFetchState(FETCH_STATES.COMPLETE)
      navigate('/profile')
    } catch (error) {
      setFetchState(FETCH_STATES.ERROR)
      console.log(error.message)
    }
  }

  return (
    <>
      <form className='editProfileForm' onSubmit={handleSubmit}>
        <div className='editProfileForm-item'>
          <img src={profilePicture || null} />
          <div className='editProfileForm-item-camera'>
            <p>Actualizar</p>
            <FaCamera />
          </div>
          <input
            type='file'
            onChange={handleChangeProfilePicture}
            className='editProfileForm__file-input'
            accept='.jpg,.png,.jpeg'
            id='profilePicture'
          />
        </div>
        <div className='editProfileForm-item cover'>
          <img src={coverPicture || null} />
          <div className='editProfileForm-item-camera cover'>
            <p>Actualizar</p>
            <FaCamera />
          </div>
          <input
            type='file'
            onChange={handleChangeCoverPicture}
            className='editProfileForm__file-input cover'
            accept='.jpg,.png,.jpeg'
            id='profilePicture'
          />
        </div>
        <input
          type='text'
          placeholder='Nombre'
          value={profile.name}
          name='name'
          onChange={handleInputTextChange}
        />
        <input
          type='text'
          placeholder='Descripción'
          value={profile.description}
          name='description'
          onChange={handleInputTextChange}
        />
        <button>Actualizar</button>
        {fetchState === FETCH_STATES.ERROR && (
          <p className='editProfileForm__error'>Ocurrio un error inesperado</p>
        )}
      </form>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
