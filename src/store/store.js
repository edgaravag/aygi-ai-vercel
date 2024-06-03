import { configureStore } from "@reduxjs/toolkit";
import isAdminSlice from "./features/isAdminSlice/isAdminSlice";
import userDataSlice from "./features/userDataSlice/userDataSlice";
import geminiTextSlice from "./features/geminiTextSlice/geminiTextSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      isAdmin: isAdminSlice,
      userData: userDataSlice,
      geminiText: geminiTextSlice,
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: ["geminiText/setGeminiText"],
    //       ignoredPaths: ["geminiText.image"],
    //     },
    //   }),
  });
};
