import axios from 'axios'
import { API_URL } from '../config'

export default async function getUsers({ id }) {
  const response = await axios.get(`${API_URL}/user/${id}`)

  return response.data.body
}
