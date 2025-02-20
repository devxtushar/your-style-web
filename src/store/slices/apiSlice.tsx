import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI } from "../../services/apiCalls";
import { queryParams } from "../../utils/helperFn";

export const fetchCompareData: any = createAsyncThunk(
  "fetchCompareData",
  async () => {
    const params = queryParams();
    const response = await getAPI(`/products?${params}`);
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
      state.value = action.payload;
    });
  },
  reducers: {},
});
export default apiSlice.reducer;
