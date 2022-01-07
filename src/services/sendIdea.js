import axios from 'axios'
export default async function sendIdea({ id, content }) {
  try {
    await axios.post(`http://localhost:3001/post/${id}`, content)
  } catch (error) {
    console.log(error.message)
  }
}
