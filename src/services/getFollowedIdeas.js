import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function getIdeas({ id }) {
  const response = await axios.get(`${BACKEND_URI}/post?userId=${id}`)
  console.log(response.data.body)
  return response.data.body
}
