import axios from 'axios'
import { API_URL } from '../config'

export default async function getIdeas({ id }) {
  const response = await axios.get(`${API_URL}/post/${id}`)
  return response.data.body
}
