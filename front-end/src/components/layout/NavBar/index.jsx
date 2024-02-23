import { Link } from 'react-router-dom'
import Logo from '../Logo'
import UserAuthenticationHandler from '../../UserAuthenticationHandler'

function NavBar() {
  return (
    <nav className="main-nav">
      <Link to={'/'} className="main-nav-logo">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <UserAuthenticationHandler />
    </nav>
  )
}

export default NavBar
