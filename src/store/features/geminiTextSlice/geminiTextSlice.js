import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: '',
};

const geminiTextSlice = createSlice({
  name: "geminiText",
  initialState,
  reducers: {
    setGeiminiText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const getGeminiText = (state) => {
  return state.geminiText.text;
};

export const { setGeiminiText } = geminiTextSlice.actions;

export default geminiTextSlice.reducer;
