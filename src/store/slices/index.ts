import { combineReducers, Reducer } from 'redux'

import { RootState } from '../../helpers/types'

import syncReducer from './sync'
import authReducer from './auth'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
 authState: authReducer,
 syncState: syncReducer,
})

export default rootReducer
