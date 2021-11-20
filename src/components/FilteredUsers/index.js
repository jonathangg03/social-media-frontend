import User from '../User'

export default function FilteredUsers({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <User
            key={user.id}
            name={user.name}
            description={user.description}
            profilePicture={user.profilePicture}
          />
        )
      })}
    </ul>
  )
}
