import { useState, useEffect } from 'react'
import getProfile from '../services/getProfile'

export default function useGetProfile({ token }) {
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    if (token) {
      const profile = await getProfile({ token: token })
      setProfile(profile)
    }
  }, [token])

  return { profile }
}
