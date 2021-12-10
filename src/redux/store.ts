import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cart";

export interface RootState {
  counter: {
    count: number;
  };
}
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
