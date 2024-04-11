import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const getModalState = (state) => {
  return state.modal.isOpen;
};

export const { setIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
