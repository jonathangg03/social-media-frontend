import { createContext, useEffect, useState } from 'react'
import { getCookie } from '../utils/cookies'
import getProfile from '../services/getProfile'

const Context = createContext({})

export function AuthContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => getCookie({ name: 'token' } || null))
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    if (jwt) {
      const response = await getProfile({ token: jwt })
      setProfile(response)
    }
  }, [jwt])

  const { _id } = profile

  return (
    <Context.Provider
      value={{
        token: jwt,
        setJwt,
        _id
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
