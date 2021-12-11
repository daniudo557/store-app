import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';

export interface RootState {
  cart: {
    id: number;
    count: number;
  }[];
}
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
