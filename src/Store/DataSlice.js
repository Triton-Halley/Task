import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    editItem(state, action) {},
  },
});

export const DataSliceAction = DataSlice.actions;

export default DataSlice;
