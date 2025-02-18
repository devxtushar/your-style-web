import { configureStore } from "@reduxjs/toolkit";
import compareSlice from "./slices/compareSlice";
import apiSlice from "./slices/apiSlice";

export const store = configureStore({
  reducer: { compareSlice, apiSlice },
});
