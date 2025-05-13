import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './userSlice.js'

export const store = configureStore({
    reducer: {
        user: UserReducer,
    }
})