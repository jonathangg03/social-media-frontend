import axios from 'axios'
import { API_URL } from '../config'

export default async function likePost({ postId, userId }) {
  await axios.patch(`${API_URL}/post/${postId}?user=${userId}`)
}
