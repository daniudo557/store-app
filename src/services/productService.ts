import { Endpoints } from "configs/endpoints";
import { Product } from "domains/Product";
import RequestService from "./requestService";

export const fetchProduct = (): Promise<Product[]> => {
  return RequestService.get<Product[]>(Endpoints.PRODUCTS).then((respnse) => {
    return respnse.data;
  });
};

export const findProduct = (productId: string): Promise<Product> => {
  const url = Endpoints.FIND_PRODUCT.replace("{id}", productId);

  return RequestService.get<Product>(url).then((respnse) => {
    return respnse.data;
  });
};

export const createProduct = (product: Partial<Product>): Promise<Product> => {
  return RequestService.post<Product>(Endpoints.CREATE_PRODUCT, product).then(
    (respnse) => respnse.data
  );
};

// export const updateProduct = (product: Product): Promise<Product> => {
//   const productId = product.id.toString();
//   const url = Endpoints.DELETE_PRODUCT.replace("{id}", productId);

//   return RequestService.put<Product>(url, product).then((respnse) => respnse.data);
// };

// export const deleteProduct = (product: Product): Promise<Product> => {
//   const productId = product.id.toString();
//   const url = Endpoints.DELETE_PRODUCT.replace("{id}", productId);

//   return RequestService.delete<Product>(url).then((respnse) => respnse.data);
// };
