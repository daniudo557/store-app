import { configureStore } from "@reduxjs/toolkit";
import { User } from "src/domains/User";
import cartReducer, { CartProduct } from "./cart";
import userReducer from "./user";

export interface RootState {
  cart: CartProduct[];
  user: User;
}
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
