import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import Host from '../../../components/Host'
import EditUserName from '../../../containers/Forms/EditUserName'
import { selectProfile, selectEditMode } from '../../App/store/selectors'
import { handleEditMode } from '../../../containers/Forms/EditUserName/editUserNameSlice'

function Header() {
  const userProfile = useSelector(selectProfile)
  const editUserNameMode = useSelector(selectEditMode)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(handleEditMode())
  }

  return (
    <div className="header">
      {editUserNameMode ? (
        <EditUserName onClick={handleChange} userProfile={userProfile} />
      ) : (
        <>
          <Host user={userProfile} />
          <button className="edit-button" onClick={handleChange}>
            Edit Name
          </button>
        </>
      )}
    </div>
  )
}

export default Header
