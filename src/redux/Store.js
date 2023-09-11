import { configureStore } from '@reduxjs/toolkit'

import  kmReducer from "./KmSlice";

export const store = configureStore({
  reducer: {
    km: kmReducer,
  },
})