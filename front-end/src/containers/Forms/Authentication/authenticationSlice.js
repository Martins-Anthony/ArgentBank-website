import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../../../utils/api/adresseApi'

export const loginUser = createAsyncThunk('authentication/loginUser', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${urlApi}user/login`, {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data.body.token
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const profileUser = createAsyncThunk(
  'authentication/profileUser',
  async (user, thunkAPI) => {
    try {
      const response = await fetch(`${urlApi}user/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
      })
      const data = await response.json()
      return data.body
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    user: null,
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {
    userLogout: (state) => {
      state.user = null
      state.profile = null
    },
    resetError: (state) => {
      state.error = null
    },
    setUserName: (state, action) => {
      state.profile.userName = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(profileUser.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(profileUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { userLogout, resetError, setUserName } = authenticationSlice.actions
export default authenticationSlice.reducer
