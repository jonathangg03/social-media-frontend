import axios from 'axios'
import { API_URL } from '../config'

export default async function sendIdea({ id, content, file }) {
  const fd = new FormData()
  fd.append('content', content)
  if (file) {
    fd.append('postImage', file)
  }
  await axios.post(`${API_URL}/post/${id}`, fd)
}
