import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: { data: [] },
  reducers: {
    editItem(state, action) {},
    fetchItem(state, action) {
      state.data = action.payload;
      console.log(state.data);
    },
  },
});

export const DataSliceAction = DataSlice.actions;

export default DataSlice;
