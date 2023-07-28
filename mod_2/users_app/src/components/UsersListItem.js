function UsersListItem(props) {
  const user = props.user
  return (
    <div key={user.id}>
      <h3> {user.name}</h3>
      <h4>{user.phone}</h4>
      <h4>{user.email}</h4>
    </div>
  )
}

export default UsersListItem
