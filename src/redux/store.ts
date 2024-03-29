import { configureStore } from "@reduxjs/toolkit";

import { User } from "domains/User";
import cartReducer, { CartProduct } from "./cart";
import userReducer from "./user";

export interface RootState {
  cart: CartProduct[];
  user: { user?: User };
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
