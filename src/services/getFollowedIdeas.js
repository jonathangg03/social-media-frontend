import axios from 'axios'

export default async function getFollowedIdeas({ id }) {
  const response = await axios.get(`${process.env.API_URL}/post?userId=${id}`)

  return response.data.body
}
