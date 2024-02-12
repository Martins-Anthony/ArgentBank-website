import { useDispatch, useSelector } from 'react-redux'
import { loginUser, profileUser, resetError } from './authenticationSlice'
import { openModal, closeModal } from '../Modal/errorModalSlice'
import { selectUser, selectErrorModal, selectError } from '../App/selectors'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as keyRegex from './keyRegex'
import Modal from '../Modal'

function Authentication() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const { isOpen, errorMessage } = useSelector((state) => state.errorModal)
  const handleModal = useSelector(selectErrorModal).isOpen
  const loginRejected = useSelector(selectError)

  const navigate = useNavigate()
  const form = useRef()

  const handleCloseModal = (event) => {
    event.preventDefault()
    dispatch(closeModal())
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const id = {
      email: event.target.username.value,
      password: event.target.password.value,
    }

    if (!keyRegex.isEmailValid(id.email)) {
      dispatch(openModal('Username invalid'))
    }
    if (!keyRegex.isPasswordValid(id.password)) {
      dispatch(openModal('Password invalid'))
    }
    if (keyRegex.isEmailValid(id.email) && keyRegex.isPasswordValid(id.password)) {
      dispatch(loginUser(id))
    }
    form.current.reset()
  }

  useEffect(() => {
    if (loginRejected === 'Rejected') {
      dispatch(openModal('Username and Password invalid'))
      dispatch(resetError())
    }
  }, [loginRejected])

  useEffect(() => {
    if (user) {
      dispatch(profileUser(user))
      navigate('/user')
    }
  }, [user, dispatch])

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
      <Modal isOpen={handleModal} onClose={handleCloseModal}>
        <h2>Error</h2>
        <p>{errorMessage}</p>
      </Modal>
    </>
  )
}

export default Authentication
