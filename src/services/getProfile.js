import axios from 'axios'

export default async function getProfile({ token }) {
  const response = await axios.get(
    'http://localhost:3001/user?getProfile=true',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data.body
}
