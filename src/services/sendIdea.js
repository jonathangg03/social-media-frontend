import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function sendIdea({ id, content }) {
  await axios.post(`${BACKEND_URI}/post/${id}`, content)
}
