import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import { FLUSH, REHYDRATE, REGISTER, PERSIST, PAUSE, PURGE } from 'redux-persist'
// reducers
import UserReducer from './userSlice.js'
import CartReducer from './cartSlice.js'


const reducers = combineReducers({
    user: UserReducer,
    cart: CartReducer,
})

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const persistedReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducers,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, REGISTER, PERSIST, PAUSE, PURGE]
            }
        })
})

const persistor = persistStore(store)

export { store, persistor }
