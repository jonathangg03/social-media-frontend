import axios from 'axios'

export default async function signIn({ email, password }) {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/sign-in`,
    {
      email,
      password
    }
  )

  return response.data.body.jwt
}
