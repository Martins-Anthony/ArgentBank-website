import { Link } from "react-router-dom"

function Error() {
  return(
    <main className="error-container">
    <h1 className="error-title">404</h1>
    <p className="error-subtitle">
      La page que vous demandez n'existe pas.
    </p>
    <Link className="error-link" to="/">
      Retourner sur la page d'acceuil
    </Link>
  </main>
  )
}

export default Error