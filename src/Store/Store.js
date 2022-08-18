import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import AuthenticationSlice from "./AuthenticationSlice";
const Store = configureStore({
  reducer: { data: DataSlice.reducer, auth: AuthenticationSlice.reducer },
});

export default Store;
