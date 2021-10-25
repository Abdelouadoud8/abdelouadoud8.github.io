// This file for all async call funct in store

import { all, put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { login, loginSuccess, loginError, logout, logoutSuccess } from '../slices/auth'

// Hit the Express endpoint to get the current user from the cookie
const isDemo = process.env.DEMO

function* loginUser() {
 try {
  if (isDemo) {
   yield put(loginSuccess({ name: 'Demo User' }))
  } else {
   const { data } = yield axios('/api/auth/login')

   yield put(loginSuccess(data))
  }
 } catch (error) {
  yield put(loginError(error.message))
 }
}

// Remove the access token cookie from Express
function* logoutUser() {
 try {
  if (isDemo) {
   yield put(logoutSuccess())
  } else {
   yield axios('/api/auth/logout')
  }

  yield put(logoutSuccess())
 } catch (error) {
  yield put(logoutSuccess())
 }
}
