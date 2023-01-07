import axios from 'axios'

export default async function getIdeas({ id }) {
  const response = await axios.get(`${process.env.API_URL}/post/${id}`)
  return response.data.body
}
