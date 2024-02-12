import Authentication from '../../components/Authentication'
import Modal from '../../components/Modal/index'
import { useDispatch, useSelector } from 'react-redux'
import { selectModalError } from '../../components/App/selectors'
import { closeModalError } from '../../components/Authentication/authenticationSlice'

function SignIn() {
  const dispatch = useDispatch()
  const closeModal = () => dispatch(closeModalError())
  const modalError = useSelector(selectModalError)

  return (
    <main className="main bg-dark padding-signIn">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Authentication />
        <Modal isOpen={modalError} onClose={closeModal}>
          <h2>Erreur</h2>
          <p>E-mail ou mot de passe incorrect</p>
        </Modal>
      </section>
    </main>
  )
}

export default SignIn
