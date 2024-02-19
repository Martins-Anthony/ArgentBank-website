import { Link } from 'react-router-dom'
function SignOut({ userProfile, onClick }) {
  return (
    <div>
      <Link className="main-nav-item" to={'/user'}>
        <i className="fa fa-user-circle"></i> {userProfile ? userProfile.userName : null}
      </Link>
      <Link className="main-nav-item" to={'/'} onClick={onClick}>
        <i className="fa fa-sign-out"></i> Sign Out
      </Link>
    </div>
  )
}

export default SignOut
