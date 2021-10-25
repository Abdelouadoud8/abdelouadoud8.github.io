import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthState } from '../../helpers/types'

export const initialState: AuthState = {
 currentUser: {},
 isAuthenticated: false,
 error: false,
 msg: '',
 loading: true,
}

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  login: (state) => {
   state.loading = true
  },

  // eslint-disable-next-line
  loginSuccess: (state, { payload }: PayloadAction<any>) => {
   state.currentUser = payload
   state.isAuthenticated = true
   state.loading = false
   state.error = false
  },

  loginError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = true
   state.isAuthenticated = false
   state.loading = false
  },

  logout: (state) => {
   state.loading = true
  },

  logoutSuccess: (state) => {
   state.isAuthenticated = false
   state.currentUser = {}
   state.error = false
   state.msg = ''
   state.loading = false
  },
 },
})

export const { login, loginSuccess, loginError, logout, logoutSuccess } = authSlice.actions

export default authSlice.reducer
