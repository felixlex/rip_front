import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from "./authSlice"
import RecordListFilter from "./RecordFilterSlice"
import OrderStatusFilter from "./AnimalStatusFilter";
import OrderDateFilter from "./AnimalDateFilter";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
        user: authReducer,
        filter: RecordListFilter,
        filter_status:OrderStatusFilter,
        filter_date:OrderDateFilter
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)