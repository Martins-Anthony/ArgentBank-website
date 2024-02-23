import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectProfile, selectRememberMeChecked } from '../App/store/selectors'
import { userLogout } from '../../containers/Forms/Authentication/authenticationSlice'
import { resetEditMode } from '../../containers/Forms/EditUserName/editUserNameSlice'
import SignIn from '../SignIn'
import SignOut from '../SignOut'
function LinkSignInAndOut() {
  const user = useSelector(selectUser)
  const userProfile = useSelector(selectProfile)
  const userRememberChecked = useSelector(selectRememberMeChecked).checked
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userLogout())
    dispatch(resetEditMode())
    localStorage.removeItem('reduxState')
    if (!userRememberChecked) {
      localStorage.removeItem('idUser')
    }
  }

  return !user ? <SignIn /> : <SignOut userProfile={userProfile} onClick={handleLogout} />
}

export default LinkSignInAndOut
