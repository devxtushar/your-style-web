import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI } from "../../services/apiCalls";

export const fetchCompareData: any = createAsyncThunk(
  "fetchCompareData",
  async () => {
    const response = await getAPI("/products");
    console.log("entere");
    return response.data;
  }
);

const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompareData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    });
  },
  reducers: {},
});
export default apiSlice.reducer;
