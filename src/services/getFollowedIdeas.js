import axios from 'axios'
import { API_URL } from '../config'

export default async function getFollowedIdeas({ id }) {
  const response = await axios.get(`${API_URL}/post?userId=${id}`)

  return response.data.body
}
