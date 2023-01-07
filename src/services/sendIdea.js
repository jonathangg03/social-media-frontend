import axios from 'axios'

export default async function sendIdea({ id, content, file }) {
  const fd = new FormData()
  fd.append('content', content)
  if (file) {
    fd.append('postImage', file)
  }
  await axios.post(`${process.env.API_URL}/post/${id}`, fd)
}
