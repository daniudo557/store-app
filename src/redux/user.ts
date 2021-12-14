import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { User } from "src/domains/User";

const userSlice = createSlice<User | {}, SliceCaseReducers<User | {}>>({
  name: "user",
  initialState: {},
  reducers: {
    saveUser: (state, action) => {
      Object.assign(state, action.payload);
    },
    removeUser: (state) => {
      Object.assign(state, undefined);
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
