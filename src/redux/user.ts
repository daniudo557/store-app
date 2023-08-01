import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { User } from "domains/User";

const userSlice = createSlice<
  { user?: User },
  SliceCaseReducers<{ user?: User }>
>({
  name: "user",
  initialState: { user: undefined },
  reducers: {
    saveUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
