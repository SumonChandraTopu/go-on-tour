import { configureStore } from "@reduxjs/toolkit";
import { locationsApi } from "../services/travelApi";

export const store = configureStore({
  reducer: {
    [locationsApi.reducerPath]: locationsApi.reducer,
  },
});
