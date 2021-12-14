import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartProduct } from './cart';

export interface RootState {
  cart: CartProduct[];
}
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
