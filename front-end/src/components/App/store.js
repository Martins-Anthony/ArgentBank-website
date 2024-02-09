import { configureStore } from '@reduxjs/toolkit'

let state = {
  value: null,
  list: [],
}

const reducer = () => {}

export const store = configureStore({
  preloadedState: state,
  reducer,
  devTools: true,
})
