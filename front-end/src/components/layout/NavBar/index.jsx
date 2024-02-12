import { Link } from 'react-router-dom'
import Logo from '../Logo'
import LinkSignInAndOut from '../../LinkSignInAndOut'

function NavBar() {
  return (
    <nav className="main-nav">
      <Link to={'/'} className="main-nav-logo">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <LinkSignInAndOut />
    </nav>
  )
}

export default NavBar
