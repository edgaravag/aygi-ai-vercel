import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const getUserData = (state) => {
  return state.userData.userData;
};

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
