import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getCookie } from '../utils/cookies'

const Context = createContext({})

export function AuthContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => getCookie({ name: 'token' } || null))
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    if (jwt) {
      const response = await axios.get('http://localhost:3001/user', {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      setProfile(response.data.body.user)
    }
  }, [])

  const {
    coverPhotoUrl,
    description,
    followedPeople,
    likedPost,
    name,
    profilePhotoUrl,
    _id
  } = profile

  return (
    <Context.Provider
      value={{
        token: jwt,
        setJwt,
        coverPhotoUrl,
        description,
        followedPeople,
        likedPost,
        name,
        profilePhotoUrl,
        _id
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
