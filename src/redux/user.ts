import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { User } from "src/domains/User";

const userSlice = createSlice<
  { user?: User },
  SliceCaseReducers<{ user?: User }>
>({
  name: "user",
  initialState: { user: undefined },
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
