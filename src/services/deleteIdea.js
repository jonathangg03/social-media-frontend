import axios from 'axios'

export default async function deleteIdea({ id }) {
  await axios.delete(`${process.env.API_URL}/post/${id}`)
}
