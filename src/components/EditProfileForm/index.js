import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import Context from '../../Context/authContext'
import useGetProfile from '../../hooks/useGetProfile'
import { FaCamera } from 'react-icons/fa'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function editProfileForm() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL) //Para que desde el primer render esté el loading
  const navigate = useNavigate()
  const { token } = useContext(Context)
  const { profile, handleInputTextChange, handleInputImageChange } =
    useGetProfile({ token })

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
    }
  }

  return (
    <>
      <form className='editProfileForm' onSubmit={handleSubmit}>
        <div className='editProfileForm-item'>
          <img src={profile?.profilePhotoUrl || null} />
          <div className='editProfileForm-item-camera'>
            <p>Actualizar</p>
            <FaCamera />
          </div>
          <input
            type='file'
            onChange={handleInputImageChange}
            className='editProfileForm__file-input'
            accept='.jpg,.png,.jpeg'
            name='profilePhotoUrl'
          />
        </div>
        <div className='editProfileForm-item cover'>
          <img src={profile?.coverPhotoUrl || null} />
          <div className='editProfileForm-item-camera cover'>
            <p>Actualizar</p>
            <FaCamera />
          </div>
          <input
            type='file'
            onChange={handleInputImageChange}
            className='editProfileForm__file-input cover'
            accept='.jpg,.png,.jpeg'
            name='coverPhotoUrl'
          />
        </div>
        <input
          type='text'
          placeholder='Nombre'
          value={profile.name}
          name='name'
          onChange={(e) => handleInputTextChange(e)}
        />
        <input
          type='text'
          placeholder='Descripción'
          value={profile.description}
          name='description'
          onChange={(e) => handleInputTextChange(e)}
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
