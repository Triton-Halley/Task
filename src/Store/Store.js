import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import AuthenticationSlice from "./AuthenticationSlice";
import DisplayGridItemsSlice from "./DisplayGirdItemsSlice";
const Store = configureStore({
  reducer: {
    data: DataSlice.reducer,
    auth: AuthenticationSlice.reducer,
    gridView: DisplayGridItemsSlice.reducer,
  },
});

export default Store;
