import axios from 'axios'
import { API_URL } from '../config'

export default async function getUsers({ name }) {
  const response = await axios.get(`${API_URL}/user?name=${name}`)

  return response.data.body
}
