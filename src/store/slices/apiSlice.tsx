import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI } from "../../services/apiCalls";
import { queryParams } from "../../utils/helperFn";

export const fetchCompareData: any = createAsyncThunk(
  "fetchCompareData",
  async () => {
    const params = queryParams();
    const response = await getAPI(`/products?${params}`);
    console.log("enter in async redux", response);
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
