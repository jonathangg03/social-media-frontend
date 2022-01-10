import axios from 'axios'

export default async function getUsers({ id }) {
  const response = await axios.get(`http://localhost:3001/user/${id}`)

  return response.data.body
}
