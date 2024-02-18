import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../adresseApi'
import { setUserName } from '../Authentication/authenticationSlice'
import { profileUser } from '../Authentication/authenticationSlice'

export const editUserName = createAsyncThunk(
  'editUserName/editUserName',
  async (newUserName, { dispatch, getState }, thunkAPI) => {
    try {
      const state = getState()
      const user = state.authentication.user
      const response = await fetch(`${urlApi}user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify({ userName: newUserName }),
      })
      const data = await response.json()

      dispatch(setUserName(data.userName))
      dispatch(profileUser(user))

      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

const editUserNameSlice = createSlice({
  name: 'editUserName',
  initialState: {
    editMode: false,
    loading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null
    },
    handleEditMode: (state) => {
      state.editMode = !state.editMode
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editUserName.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(editUserName.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(editUserName.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { resetError, handleEditMode } = editUserNameSlice.actions
export default editUserNameSlice.reducer
