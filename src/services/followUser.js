import axios from 'axios'

export default async function followUser({ userId, toFollow }) {
  await axios.patch(`${process.env.API_URL}/user`, { userId, toFollow })
}
