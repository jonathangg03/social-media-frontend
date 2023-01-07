import axios from 'axios'

export default async function getLikedIdeas({ id }) {
  const response = await axios.get(
    `${process.env.API_URL}/post/${id}?getLiked=true`
  )
  return response.data.body
}
