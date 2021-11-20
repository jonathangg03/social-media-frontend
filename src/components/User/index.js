export default function User({ name, description, profilePicture }) {
  return (
    <li>
      <img src={profilePicture} alt={name} />
      <h3>{name}</h3>
      <h4>{description}</h4>
    </li>
  )
}
