import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isFilter: false,
    FilteredArray: [],
    searchResult: null,
  },
  reducers: {
    editItem(state, action) {
      const { id, title, desc } = action.payload;
      state.data.forEach((val) => {
        if (val.id === id) {
          val.title = title;
          val.body = desc;
        }
      });
    },
    fetchItem(state, action) {
      state.data = action.payload;
      console.log(state.data);
    },
    filtering(state, action) {
      state.isFilter = true;
      state.FilteredArray = action.payload.filter;
      state.searchResult = action.payload.filter.length;
    },
  },
});

export const DataSliceAction = DataSlice.actions;

export default DataSlice;
