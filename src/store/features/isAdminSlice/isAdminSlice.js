import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const isAdminSlice = createSlice({
  name: "isAdmin",
  initialState,
  reducers: {},
});

export default isAdminSlice.reducer;