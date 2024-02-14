import Host from '../../../components/Host'
import React, { useState } from 'react'
import EditModeName from '../../Forms/EditUserName'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../App/selectors'

function Header() {
  const userProfile = useSelector(selectProfile)
  const [editMode, setEditMode] = useState(false)
  const handleChange = () => {
    setEditMode(!editMode)
  }

  if (!editMode) {
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
        <EditModeName onClick={handleChange} user={userProfile} />
      </header>
    )
  }
}

export default Header
