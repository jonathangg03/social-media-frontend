import axios from 'axios'
import { API_URL } from '../config'

export default async function deleteIdea({ id }) {
  await axios.delete(`${API_URL}/post/${id}`)
}
