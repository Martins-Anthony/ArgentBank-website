import { createSlice } from '@reduxjs/toolkit'

const rememberMeState = localStorage.getItem('rememberMe')
  ? JSON.parse(localStorage.getItem('rememberMe'))
  : {}

const rememberMeSlice = createSlice({
  name: 'rememberMe',
  initialState: {
    checked: rememberMeState,
  },
  reducers: {
    userChecked: (state, action) => {
      state.checked = action.payload
    },
  },
})

export const { userChecked } = rememberMeSlice.actions
export default rememberMeSlice.reducer
