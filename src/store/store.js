import { configureStore } from '@reduxjs/toolkit'
import modalSlice from "./features/modalSlice/modalSlice";
import isAdminSlice from "./features/isAdminSlice/isAdminSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { 
      modal: modalSlice,
      isAdmin: isAdminSlice,
    }
  })
}