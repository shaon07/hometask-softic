/// <reference types="redux-persist" />

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";


const reducers = combineReducers({
  getUser: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
