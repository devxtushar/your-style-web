import { configureStore } from "@reduxjs/toolkit";
import compareSlice from "./slices/compareSlice";

export const store = configureStore({
  reducer: { compareSlice },
});
