import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    value:
      JSON.parse(localStorage.getItem("compare") || "[]").length > 0
        ? true
        : false,
  },
  reducers: {
    addToCompareModal(state, action) {
      let compareList: string[] = JSON.parse(
        localStorage.getItem("compare") || "[]"
      );
      if (!compareList.includes(action.payload)) {
        compareList.push(action.payload);
      }
      localStorage.setItem("compare", JSON.stringify(compareList));
      alert("saved");
      if (!state.value) {
        console.log(compareList, "com");
        if (compareList.length > 0) {
          state.value = true;
        }
      }
    },
    removeToCompareModal(state, action) {
      let compareList: string[] = JSON.parse(
        localStorage.getItem("compare") || "[]"
      );
      compareList = compareList.filter((id) => id !== action.payload);
      localStorage.setItem("compare", JSON.stringify(compareList));
      alert("removed");
      if (compareList.length === 0) {
        state.value = false;
      }
    },
    openCompareModal(state) {
      state.value = true;
    },
    closeCompareModal(state) {
      state.value = false;
    },
  },
});
export const {
  addToCompareModal,
  removeToCompareModal,
  openCompareModal,
  closeCompareModal,
} = compareSlice.actions;
export default compareSlice.reducer;
