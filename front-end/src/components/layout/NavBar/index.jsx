import { Link } from "react-router-dom"
import Logo from "../Logo"

function NavBar() {
  return (
    <nav className="main-nav">
      <Link to={'/'} className="main-nav-logo" >
      <Logo /> 
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div >
        <Link className="main-nav-item" to={"/sign-in"}>
          <i className="fa fa-user-circle"></i>
          {" "}
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default NavBar