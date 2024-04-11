import { configureStore } from '@reduxjs/toolkit'
import modalSlice from "./features/modalSlice/modalSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { modal: modalSlice }
  })
}