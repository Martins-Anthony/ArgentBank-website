import Host from '../../../components/Host'
import React from 'react'
import EditModeName from '../../Forms/EditUserName'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile, selectEditMode } from '../../App/selectors'
import { handleEditMode } from '../../Forms/EditUserName/editUserNameSlice'

function Header() {
  const userProfile = useSelector(selectProfile)
  const editUserNameMode = useSelector(selectEditMode)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(handleEditMode())
  }

  if (!editUserNameMode) {
    return (
      <header className="header">
        <Host user={userProfile} />
        <button className="edit-button" onClick={handleChange}>
          Edit Name
        </button>
      </header>
    )
  } else {
    return (
      <header className="header">
        <EditModeName onClick={handleChange} userProfile={userProfile} />
      </header>
    )
  }
}

export default Header
