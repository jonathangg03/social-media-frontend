import axios from 'axios'
import { API_URL } from '../config'

export default async function getLikedIdeas({ id }) {
  const response = await axios.get(`${API_URL}/post/${id}?getLiked=true`)
  return response.data.body
}
