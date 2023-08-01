import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

export interface CartProduct {
  id: number;
  count: number;
}

export const getProductOnList = (productList: CartProduct[], id: number) =>
  productList.find((product) => product.id === id);

const cartSlice = createSlice<CartProduct[], SliceCaseReducers<CartProduct[]>>({
  name: "cart",
  initialState: [],
  reducers: {
    increment: (state, action) => {
      const cartProduct = getProductOnList(state, action.payload);
      const isProductOnList = !!cartProduct;

      if (!isProductOnList) {
        const newProduct = {
          id: action.payload as number,
          count: 1,
        };
        state.push(newProduct);
        return;
      }

      const newState = state.map((p) =>
        p.id === action.payload ? { ...p, count: p.count + 1 } : p,
      );

      state.splice(0, state.length, ...newState);
    },
    decrement: (state, action) => {
      const cartProduct = getProductOnList(state, action.payload);
      const isProductOnList = !!cartProduct;

      if (!isProductOnList) return;

      if (cartProduct.count === 1) {
        const filteredList = state.filter(
          (comic) => comic.id !== action.payload,
        );
        state.splice(0, state.length, ...filteredList);
        return;
      }

      const newState = state.map((comic) =>
        comic.id === action.payload
          ? { ...comic, count: comic.count - 1 }
          : comic,
      );
      state.splice(0, state.length, ...newState);
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
