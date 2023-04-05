import axios from 'axios'

export default async function getProfile({ token }) {
  try {
    const response = await axios(
      `${process.env.API_URL}/user?getProfile=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data.body
  } catch (error) {
    return error.response.data
  }
}
