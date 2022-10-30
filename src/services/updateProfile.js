import axios from 'axios'
import { BACKEND_URI } from '../config'

async function updateProfile({ profile, event }) {
  const fd = new FormData()
  fd.append('name', profile.name)
  fd.append('description', profile.description)
  fd.append('profilePhoto', event.target[0].files[0])
  fd.append('coverPhoto', event.target[1].files[0])
  await axios.patch(`${BACKEND_URI}/user/${profile._id}`, fd)
}

export default updateProfile
