import { useDispatch } from 'react-redux'
import { editUserName, handleEditMode } from './editUserNameSlice'
import './styleEditUserName.css'

function EditModeName({ onClick, userProfile }) {
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(editUserName(event.target.username.value))
    dispatch(handleEditMode())
  }
  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <h1>Edit user info</h1>
      <div className="input-wrapper-edit">
        <label htmlFor="username">User name :</label>
        <input type="text" id="username" required />
      </div>
      <div className="input-wrapper-edit input-readOnly">
        <label htmlFor="firstname">First name :</label>
        <input
          type="text"
          id="firstname"
          value={userProfile.firstName}
          readOnly
          className="placeholder-style"
        />
      </div>
      <div className="input-wrapper-edit input-readOnly">
        <label htmlFor="lastname">Last name :</label>
        <input
          type="text"
          id="lastname"
          value={userProfile.lastName}
          readOnly
          className="placeholder-style"
        />
      </div>
      <div className="button-container">
        <button type="submit" className="edit-button">
          Save
        </button>
        <button className="edit-button" onClick={onClick}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditModeName
