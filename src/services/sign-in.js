import axios from 'axios'

export default async function signIn({ email, password }) {
  const response = await axios.post(
    `https://social-media-backend-qenx.onrender.com/auth/sign-in`,
    {
      email,
      password
    }
  )
  // const response = await axios.post(`${process.env.API_URL}/auth/sign-in`, {
  //   email,
  //   password
  // })

  return response.data.body.jwt
}
