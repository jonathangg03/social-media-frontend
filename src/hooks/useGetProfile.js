import { useState, useEffect, useContext } from 'react'
import getProfile from '../services/getProfile'
import getUser from '../services/getUser'
import Context from '../Context/authContext'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function useGetProfile({ token, id }) {
  const { setFetchState } = useContext(Context)
  const [profile, setProfile] = useState({
    name: '',
    description: '',
    profilePhotoUrl: '',
    coverPhotoUrl: ''
  })

  useEffect(async () => {
    setFetchState(FETCH_STATES.LOADING)
    if (token) {
      const profile = await getProfile({ token })
      setProfile(profile)
    }

    if (id) {
      const profile = await getUser({ id })
      setProfile(profile)
    }
    setFetchState(FETCH_STATES.COMPLETE)
  }, [token, id])

  const handleInputTextChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value })
  }

  const handleInputImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      var reader = new FileReader()
      reader.onload = function () {
        setProfile({ ...profile, [event.target.name]: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return { profile, handleInputTextChange, handleInputImageChange }
}
