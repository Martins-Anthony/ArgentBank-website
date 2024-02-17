import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRememberMeChecked } from '../../App/selectors'
import { userChecked } from './rememberMeSlice'

function RememberMe() {
  const userRememberChecked = useSelector(selectRememberMeChecked).checked
  const dispatch = useDispatch()

  const handleRememberMe = (event) => {
    localStorage.setItem('rememberMe', JSON.stringify(event.target.checked))
    dispatch(userChecked(event.target.checked))
  }

  useEffect(() => {
    if (!userRememberChecked) {
      localStorage.removeItem('idUser')
    }
  })

  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        checked={userRememberChecked}
        onChange={handleRememberMe}
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  )
}

export default RememberMe
