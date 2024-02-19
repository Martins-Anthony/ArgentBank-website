import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from '../../containers/Forms/Authentication/authenticationSlice'
import errorModalReducer from '../Modal/errorModalSlice'
import rememberMeReducer from '../../containers/Forms/RememberMe/rememberMeSlice'
import editUserNameReducer from '../../containers/Forms/EditUserName/editUserNameSlice'

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  reducer: {
    authentication: authenticationReducer,
    errorModal: errorModalReducer,
    rememberMe: rememberMeReducer,
    editUserName: editUserNameReducer,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
