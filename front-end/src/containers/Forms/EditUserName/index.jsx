import { useDispatch } from 'react-redux'
import { editUserName, handleEditMode } from './editUserNameSlice'
import './styleEditUserName.css'
import Field, { FIELD_TYPES } from '../../../components/Field'

function EditUserName({ onClick, userProfile }) {
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(editUserName(event.target.username.value))
    dispatch(handleEditMode())
  }
  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <h1>Edit user info</h1>
      <Field containerClassName={'input-wrapper-edit'} label={'User name :'} id={'username'} />
      <Field
        type={FIELD_TYPES.INPUT_TEXT}
        containerClassName={'input-wrapper-edit input-readOnly'}
        label={'First name :'}
        id={'firstname'}
        value={userProfile.firstName}
        readOnly
        inputClassName={'placeholder-style'}
      />
      <Field
        type={FIELD_TYPES.INPUT_TEXT}
        containerClassName={'input-wrapper-edit input-readOnly'}
        label={'Last name :'}
        id={'lastname'}
        value={userProfile.lastName}
        readOnly
        inputClassName={'placeholder-style'}
      />
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

export default EditUserName
