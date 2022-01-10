import axios from 'axios'

export default async function getUsers({ name }) {
  const response = await axios.get(`http://localhost:3001/user?name=${name}`)

  return response.data.body
}
