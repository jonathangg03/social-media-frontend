import axios from 'axios'

export default async function getUsers({ id }) {
  const response = await axios.get(`${process.env.API_URL}/user/${id}`)

  return response.data.body
}
