import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from '../../../containers/Forms/Authentication/authenticationSlice'
import errorModalReducer from '../../../containers/Modal/errorModalSlice'
import rememberMeReducer from '../../../containers/Forms/RememberMe/rememberMeSlice'
import editUserNameReducer from '../../../containers/Forms/EditUserName/editUserNameSlice'

const persistedState = sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  preloadedState: persistedState,
  reducer: {
    authentication: authenticationReducer,
    errorModal: errorModalReducer,
    rememberMe: rememberMeReducer,
    editUserName: editUserNameReducer,
  },
})

store.subscribe(() => {
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
