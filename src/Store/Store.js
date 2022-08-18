import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import AuthenticationSlice from "./AuthenticationSlice";
import DisplayGridItemsSlice from "./DisplayGirdItemsSlice";
import ModalSlice from "./ModalSlice";
const Store = configureStore({
  reducer: {
    data: DataSlice.reducer,
    auth: AuthenticationSlice.reducer,
    gridView: DisplayGridItemsSlice.reducer,
    modal: ModalSlice.reducer,
  },
});

export default Store;
