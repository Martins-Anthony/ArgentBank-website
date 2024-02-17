import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from '../../components/Forms/Authentication/authenticationSlice'
import errorModalReducer from '../Modal/errorModalSlice'
import rememberMeReducer from '../Forms/RememberMe/rememberMeSlice'

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  reducer: {
    authentication: authenticationReducer,
    errorModal: errorModalReducer,
    rememberMe: rememberMeReducer,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
