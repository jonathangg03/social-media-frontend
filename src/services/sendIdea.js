import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function sendIdea({ id, content }) {
  try {
    await axios.post(`${BACKEND_URI}/post/${id}`, content)
  } catch (error) {
    console.log(error.message)
  }
}
