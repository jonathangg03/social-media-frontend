import axios from 'axios'

export default async function getIdeas({ id }) {
  const response = await axios.get(`http://localhost:3001/post/${id}`)
  return response.data.body
}
