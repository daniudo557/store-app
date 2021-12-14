import { CartProduct } from "redux/cart";

export const findProdInCartById = (cart: CartProduct[], id: number) =>
  cart.find((p: CartProduct) => p.id === id);
