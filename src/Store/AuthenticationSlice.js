import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
  name: "Auth",
  initialState: { isAuth: false, username: "" },
  reducers: {
    Auth(state, action) {
      const { username } = action.payload;
      state.isAuth = true;
      state.username = username;
    },
    Logout(state) {
      state.isAuth = false;
    },
  },
});

export const AuthenticationAction = AuthenticationSlice.actions;

export default AuthenticationSlice;
