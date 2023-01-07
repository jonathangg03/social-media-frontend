import axios from 'axios'

export default async function signUp({ name, email, password }) {
  try {
    await axios.post(`${process.env.API_URL}/user`, {
      name,
      email,
      password
    })
  } catch (error) {
    console.error(error.message)
  }
}
