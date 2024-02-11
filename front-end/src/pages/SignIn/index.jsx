import Authentication from '../../components/Authentication'

function SignIn() {
  return (
    <main className="main bg-dark padding-signIn">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Authentication />
      </section>
    </main>
  )
}

export default SignIn
