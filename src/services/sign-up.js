import axios from 'axios'
import { API_URL } from '../config'

export default async function signUp({ name, email, password }) {
  try {
    await axios.post(`${API_URL}/user`, {
      name,
      email,
      password
    })
  } catch (error) {
    console.error(error.message)
  }
}
