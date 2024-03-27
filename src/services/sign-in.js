import axios from 'axios'
import { API_URL } from '../config'

export default async function signIn({ email, password }) {
  const response = await axios.post(`${API_URL}/auth/sign-in`, {
    email,
    password
  })

  return response.data.body.jwt
}
