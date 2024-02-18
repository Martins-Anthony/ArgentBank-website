import { createSlice } from '@reduxjs/toolkit'

const errorModalSlice = createSlice({
  name: 'errorModal',
  initialState: {
    isOpen: false,
    errorMessage: '',
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.errorMessage = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
      state.errorMessage = ''
    },
  },
})

export const { openModal, closeModal } = errorModalSlice.actions
export default errorModalSlice.reducer
