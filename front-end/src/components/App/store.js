import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from '../Authentication/authenticationSlice'

export const store = configureStore({
  devTools: true,
  reducer: {
    authentication: authenticationReducer,
  },
})
