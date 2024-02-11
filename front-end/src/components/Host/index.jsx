import { useSelector } from 'react-redux'
import { selectProfile } from '../../components/App/selectors'

function Host() {
  const user = useSelector(selectProfile)
  return (
    <>
      {user.firstName} {user.lastName}
    </>
  )
}

export default Host
