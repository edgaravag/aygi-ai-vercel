import { configureStore } from "@reduxjs/toolkit";
import isAdminSlice from "./features/isAdminSlice/isAdminSlice";
import userDataSlice from "./features/userDataSlice/userDataSlice";
import geminiTextSlice from "./features/geminiTextSlice/geminiTextSlice";
import imageIdSlice from "./features/imageIdSlice/imageIdSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      isAdmin: isAdminSlice,
      userData: userDataSlice,
      geminiText: geminiTextSlice,
      imageId: imageIdSlice,
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
