import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./countrySlice";
import { activitySlice } from "./activitySlice";

export const store = configureStore({
  reducer: {
    country: countrySlice.reducer,
    activity: activitySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
