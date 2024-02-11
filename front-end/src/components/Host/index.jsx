import { useSelector } from 'react-redux'
import { selectProfile } from '../App/selectors'

function Host() {
  const user = useSelector(selectProfile)
  if (user) {
    return (
      <>
        {user.firstName} {user.lastName}
      </>
    )
  }
}

export default Host
