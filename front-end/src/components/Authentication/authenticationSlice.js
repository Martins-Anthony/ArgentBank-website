import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk('authentication/loginUser', async (id, thunkAPI) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
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
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
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

export const { userLogout } = authenticationSlice.actions
export default authenticationSlice.reducer
