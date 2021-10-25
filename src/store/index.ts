// This file is for conf store

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { useDispatch } from 'react-redux'

import rootReducer from './slices/index'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
 reducer: rootReducer,
 middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
 devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => {
 return useDispatch<AppDispatch>()
}
export default store
