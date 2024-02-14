import './styleEditUserName.css'

function EditModeName({ onClick, user }) {
  return (
    <form className="form-style">
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
          value={user.firstName}
          readOnly
          className="placeholder-style"
        />
      </div>
      <div className="input-wrapper-edit input-readOnly">
        <label htmlFor="lastname">Last name :</label>
        <input
          type="text"
          id="lastname"
          value={user.lastName}
          readOnly
          className="placeholder-style"
        />
      </div>
      <div className="button-container">
        <button className="edit-button">Save</button>
        <button className="edit-button" onClick={onClick}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditModeName
