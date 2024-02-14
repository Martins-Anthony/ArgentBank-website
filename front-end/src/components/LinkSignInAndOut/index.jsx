import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectProfile } from '../App/selectors'
import { userLogout } from '../../components/Forms/Authentication/authenticationSlice'

function LinkSignInAndOut() {
  const user = useSelector(selectUser)
  const userProfile = useSelector(selectProfile)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userLogout())
  }

  if (user) {
    return (
      <div>
        <Link className="main-nav-item" to={'/user'}>
          <i className="fa fa-user-circle"></i> {userProfile ? userProfile.userName : null}
        </Link>
        <Link className="main-nav-item" to={'/'} onClick={handleLogout}>
          <i className="fa fa-sign-out"></i> Sign Out
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link className="main-nav-item" to={'/sign-in'}>
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      </div>
    )
  }
}

export default LinkSignInAndOut
