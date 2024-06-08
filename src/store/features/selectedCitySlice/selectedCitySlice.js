import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCity: "",
};

const selectedCitySlice = createSlice({
  name: "selectedCity",
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
});

export const getSelectedCity = (state) => {
  return state.selectedCity.selectedCity;
};

export const { setSelectedCity } = selectedCitySlice.actions;

export default selectedCitySlice.reducer;
