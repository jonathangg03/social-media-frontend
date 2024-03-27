import axios from 'axios'
import { API_URL } from '../config'

export default async function getProfile({ token }) {
  try {
    const response = await axios(`${API_URL}/user?getProfile=true`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.body
  } catch (error) {
    return error.response.data
  }
}
