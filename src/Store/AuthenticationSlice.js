import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
  name: "Auth",
  initialState: { isAuth: false },
  reducers: {
    Auth() {},
  },
});

export const AuthenticationAction = AuthenticationSlice.actions;

export default AuthenticationSlice;
