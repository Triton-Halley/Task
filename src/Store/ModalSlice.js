import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, currentData: {} },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
    },
    closeModal(state, action) {
      state.isOpen = false;
    },
    setData(state, action) {
      state.currentData = action.payload;
    },
  },
});

export const ModalAction = ModalSlice.actions;

export default ModalSlice;
