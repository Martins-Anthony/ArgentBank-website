import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from '../Authentication/authenticationSlice'
import errorModalReducer from '../Modal/errorModalSlice'

export const store = configureStore({
  devTools: true,
  reducer: {
    authentication: authenticationReducer,
    errorModal: errorModalReducer,
  },
})
