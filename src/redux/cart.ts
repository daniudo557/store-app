import { createSlice } from "@reduxjs/toolkit";

export const getProductOnList = (
  productList: { id: number; count: number }[],
  id: number
) => productList.find((product) => product.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    increment: (state: any, action) => {
      const productArray: { id: number; count: number }[] = state.cart;
      const isProductOnList = !!getProductOnList(productArray, action.payload);

      if (!isProductOnList) {
        const newProduct = {
          count: 1,
          id: action.payload as number,
        };

        productArray.push(newProduct);

        state.cart = [...productArray];

        return;
      }

      state.cart = productArray.map((product) =>
        product.id === action.payload
          ? { ...product, count: product.count + 1 }
          : product
      );
    },
    decrement: (state: any, action) => {
      state.cart = state.cart.map((product: any) => {
        return product.id === action.payload
          ? { ...product, count: product.count <= 0 ? 0 : product.count - 1 }
          : product;
      });
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
