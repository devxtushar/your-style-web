import { createSlice } from "@reduxjs/toolkit";

// const compareData = localStorage.getItem("compare");

// if (compareData) {
//   console.log(JSON.parse(compareData).length);
// } else {
//   console.log("No data found in localStorage for 'compare'");
// }

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    value: localStorage.getItem("compare") ? true : false,
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
      alert("save");
      if (!state.value) {
        let stored = localStorage.getItem("compare");
        if (stored) {
          state.value = true;
        }
      }
    },
    openCompareModal(state) {
      state.value = false;
    },
    closeCompareModal(state) {
      console.log("entere in close");
      state.value = false;
    },
  },
});
export const { addToCompareModal, openCompareModal, closeCompareModal } =
  compareSlice.actions;
export default compareSlice.reducer;
