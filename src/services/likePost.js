import axios from 'axios'

export default async function likePost({ postId, userId }) {
  await axios.patch(`${process.env.API_URL}/post/${postId}?user=${userId}`)
}
