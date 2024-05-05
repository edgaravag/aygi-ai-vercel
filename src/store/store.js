import { configureStore } from '@reduxjs/toolkit'
import modalSlice from "./features/modalSlice/modalSlice";
import isAdminSlice from "./features/isAdminSlice/isAdminSlice";
import userDataSlice from './features/userDataSlice/userDataSlice';

export const makeStore = () => {
  return configureStore({
    reducer: { 
      modal: modalSlice,
      isAdmin: isAdminSlice,
      userData: userDataSlice
    }
  })
}