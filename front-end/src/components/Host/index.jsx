function Host({ user }) {
  if (user) {
    return (
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}!
      </h1>
    )
  }
}

export default Host
