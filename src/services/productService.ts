import { Endpoints } from "configs/endpoints";
import { Product } from "domains/Product";
import RequestService from "./requestService";

export const fetchProduct = () =>
  RequestService.get<Product[]>(Endpoints.PRODUCTS).then(
    (respnse) => respnse.data,
  );

export const findProduct = (productId: string) => {
  const url = Endpoints.FIND_PRODUCT.replace("{id}", productId);

  return RequestService.get<Product>(url).then((respnse) => respnse.data);
};

export const createProduct = (product: Partial<Product>) =>
  RequestService.post<Product>(Endpoints.CREATE_PRODUCT, product).then(
    (respnse) => respnse.data,
  );

// export const updateProduct = (product: Product) => {
//   const productId = product.id.toString();
//   const url = Endpoints.DELETE_PRODUCT.replace("{id}", productId);

//   return RequestService.put<Product>(url, product).then((respnse) => respnse.data);
// };

// export const deleteProduct = (product: Product) => {
//   const productId = product.id.toString();
//   const url = Endpoints.DELETE_PRODUCT.replace("{id}", productId);

//   return RequestService.delete<Product>(url).then((respnse) => respnse.data);
// };
