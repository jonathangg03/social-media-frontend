import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import './index.scss'

export default function ProfilePhoto({ profile }) {
  return (
    <figure className='profilePhoto'>
      {profile.profilePhotoUrl === undefined && <img src={null} />}
      {profile.profilePhotoUrl === '' && (
        <img src={defaultProfilePhoto} alt={profile.name} />
      )}
      {profile.profilePhotoUrl && profile.profilePhotoUrl.length > 0 && (
        <img src={profile.profilePhotoUrl} alt={profile.name} />
      )}
    </figure>
  )
}
