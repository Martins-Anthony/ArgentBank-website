import { useDispatch, useSelector } from 'react-redux'
import { loginUser, profileUser } from './authenticationSlice'
import { selectUser } from '../App/selectors'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Authentication() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const id = {
      email: event.target.username.value,
      password: event.target.password.value,
    }
    dispatch(loginUser(id))
  }

  useEffect(() => {
    if (user) {
      dispatch(profileUser(user))
      navigate('/user')
    }
  }, [user, dispatch])

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  )
}

export default Authentication
