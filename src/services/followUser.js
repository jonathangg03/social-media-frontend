import axios from 'axios'
import { API_URL } from '../config'

export default async function followUser({ userId, toFollow }) {
  await axios.patch(`${API_URL}/user`, { userId, toFollow })
}
