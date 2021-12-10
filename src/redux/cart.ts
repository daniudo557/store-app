import { createSlice } from "@reduxjs/toolkit";

export const getProductOnList = (productList: { id: number }[], id: number) =>
  productList.find((product) => product.id === id);

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

      // const oldState: any = state.find(
      //   (product: any) => product.id === action.payload
      // );

      // const newState = { count: oldState.count + 1, id: action.payload };

      // const oldArray = [...state];

      // state = [...oldArray, newState];
    },
    decrement: (state, id) => {
      // if (state.count <= 0) return;
      // state.count -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
