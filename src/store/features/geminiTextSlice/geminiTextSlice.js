import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: '',
  imageURL: null,
};

const geminiTextSlice = createSlice({
  name: "geminiText",
  initialState,
  reducers: {
    setGeminiText: (state, action) => {
      state.text = action.payload.text;
      state.image = action.payload.imageURL; 
    },
  },
});

export const getGeminiText = (state) => {
  return state.geminiText;
};

export const { setGeminiText } = geminiTextSlice.actions;

export default geminiTextSlice.reducer;
