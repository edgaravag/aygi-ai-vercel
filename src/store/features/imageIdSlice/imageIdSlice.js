import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageId: null,
};

const imageIdSlice = createSlice({
  name: "imageId",
  initialState,
  reducers: {
    setImageId: (state, action) => {
      state.imageId = action.payload;
    },
  },
});

export const getImageId = (state) => {
  return state.imageId.imageId;
};

export const { setImageId } = imageIdSlice.actions;

export default imageIdSlice.reducer;
