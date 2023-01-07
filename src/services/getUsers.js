import axios from 'axios'

export default async function getUsers({ name }) {
  const response = await axios.get(`${process.env.API_URL}/user?name=${name}`)

  return response.data.body
}
