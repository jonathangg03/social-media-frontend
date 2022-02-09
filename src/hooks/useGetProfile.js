import { useState, useEffect } from 'react'
import getProfile from '../services/getProfile'
import getUser from '../services/getUser'

export default function useGetProfile({ token, id }) {
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    if (token) {
      const profile = await getProfile({ token: token })
      setProfile(profile)
    }
    if (id) {
      const profile = await getUser({ id })
      setProfile(profile)
    }
  }, [token, id])

  return { profile }
}
