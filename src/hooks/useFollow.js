import { useState, useEffect, useContext } from 'react'
import getProfile from '../services/getProfile'
import followUser from '../services/followUser'
import Context from '../Context/authContext'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

function useFollow({ profileId, userId, token }) {
  const [followed, setFollowed] = useState(null)
  const { setFetchState } = useContext(Context)

  useEffect(async () => {
    //Saber sí seguimos al usuario de quien vemos el perfil
    if (profileId && token) {
      const profileResponse = await getProfile({ token })
      if (profileResponse.followedPeople.includes(profileId)) {
        setFollowed(true)
      } else {
        setFollowed(false)
      }
    }
  }, [profileId, token])

  const handleFollow = async () => {
    //Seguir a un usuario
    setFetchState(FETCH_STATES.LOADING)
    try {
      await followUser({ userId: userId, toFollow: profileId })
      setFollowed(!followed)
      setFetchState(FETCH_STATES.COMPLETE)
    } catch (error) {
      setFetchState(FETCH_STATES.ERROR)
      console.error(error.message)
    }
  }

  return { followed, handleFollow }
}

export default useFollow
