import axios from 'axios'

export default async function getProfile({ token }) {
  const response = await axios.get(
    `${process.env.API_URL}/user?getProfile=true`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data.body
}
