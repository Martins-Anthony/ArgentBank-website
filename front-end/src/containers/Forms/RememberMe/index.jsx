import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRememberMeChecked } from '../../../components/App/store/selectors'
import { userChecked } from './rememberMeSlice'
import Field, { FIELD_TYPES } from '../../../components/Field'

function RememberMe() {
  const userRememberChecked = useSelector(selectRememberMeChecked).checked
  const dispatch = useDispatch()

  const handleRememberMe = (event) => {
    localStorage.setItem('rememberMe', JSON.stringify(event.target.checked))
    dispatch(userChecked(event.target.checked))
  }

  useEffect(() => {
    if (!userRememberChecked) {
      localStorage.removeItem('idUser')
    }
  })

  return (
    <Field
      type={FIELD_TYPES.INPUT_CHECKBOX}
      id={'remember-me'}
      checked={userRememberChecked}
      onChange={handleRememberMe}
      label={'Remember me'}
      containerClassName={'input-remember'}
    />
  )
}

export default RememberMe
