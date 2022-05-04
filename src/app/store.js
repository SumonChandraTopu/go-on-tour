import { configureStore } from "@reduxjs/toolkit";
import { hotelsApi } from "../services/hotelsApi";

export const store = configureStore({
  reducer: {
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
});
