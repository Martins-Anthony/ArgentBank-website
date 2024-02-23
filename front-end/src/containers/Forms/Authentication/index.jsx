import { useDispatch, useSelector } from 'react-redux'
import { loginUser, profileUser, resetError } from './authenticationSlice'
import { openModal, closeModal } from '../../Modal/errorModalSlice'
import {
  selectUser,
  selectErrorModal,
  selectError,
  selectRememberMeChecked,
} from '../../../components/App/store/selectors'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Modal'
import RememberMe from '../RememberMe'
import Field, { FIELD_TYPES } from '../../../components/Field'

function Authentication() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const userRememberChecked = useSelector(selectRememberMeChecked).checked
  const { errorMessage } = useSelector((state) => state.errorModal)
  const handleModal = useSelector(selectErrorModal).isOpen
  const loginRejected = useSelector(selectError)
  const navigate = useNavigate()

  const userRemember = localStorage.getItem('idUser')
    ? JSON.parse(localStorage.getItem('idUser'))
    : {}

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

    if (userRememberChecked) {
      localStorage.setItem('idUser', JSON.stringify(id))
    }

    dispatch(loginUser(id))
  }

  useEffect(() => {
    if (loginRejected === 'Rejected') {
      dispatch(openModal('Username or Password invalid'))
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
      <form onSubmit={handleSubmit}>
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          containerClassName={'input-wrapper'}
          id={'username'}
          label={'Username'}
          defaultValue={userRemember.email}
        />
        <Field
          type={FIELD_TYPES.INPUT_PASSWORD}
          containerClassName={'input-wrapper'}
          id={'password'}
          label={'Password'}
          defaultValue={userRemember.password}
        />
        <RememberMe />
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
