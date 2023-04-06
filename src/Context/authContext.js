import { createContext, useEffect, useState } from 'react'
import { getStorage } from '../utils/storage'
import getProfile from '../services/getProfile'

const Context = createContext({})

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export function AuthContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => getStorage({ name: 'token' } || null))
  const [profile, setProfile] = useState({})
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)

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
        _id,
        fetchState,
        setFetchState
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
