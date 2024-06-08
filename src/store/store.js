import { configureStore } from "@reduxjs/toolkit";
import isAdminSlice from "./features/isAdminSlice/isAdminSlice";
import userDataSlice from "./features/userDataSlice/userDataSlice";
import geminiTextSlice from "./features/geminiTextSlice/geminiTextSlice";
import selectedCitySlice from "./features/selectedCitySlice/selectedCitySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      isAdmin: isAdminSlice,
      userData: userDataSlice,
      geminiText: geminiTextSlice,
      selectedCity: selectedCitySlice,
    },
  });
};
