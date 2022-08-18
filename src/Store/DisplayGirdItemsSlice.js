import { createSlice } from "@reduxjs/toolkit";

const DisplayGridItemsSlice = createSlice({
  name: "gridView",
  initialState: { gridListItems: [], pages: 2, currentPage: 1, position: 9 },
  reducers: {
    updateGridView(state, action) {
      console.log(action.payload.data);
      state.gridListItems = action.payload.data;
    },
    setPages(state, action) {
      state.pages = action.payload.pages;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload.currentPage;
    },

    updatePosition(state, action) {
      state.position = action.payload.pos;
    },
  },
});

export const DisplayGridItemsAction = DisplayGridItemsSlice.actions;

export default DisplayGridItemsSlice;
