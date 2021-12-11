import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";
import {
  createProduct as createProductService,
  fetchProduct as fetchProductService,
  findProduct as findProductService,
} from "src/services/productService";

export const useProduct = () => {
  const queryClient = useQueryClient();
  const params: { id?: string } = useParams();

  const {
    data: productList,
    isLoading: isLoadingProductList,
    isFetching: isFetchingProductList,
  } = useQuery("productList", fetchProductService, {
    enabled: !params.id,
  });

  const {
    data: product,
    isLoading: isLoadingProduct,
    isFetching: isFetchingProduct,
  } = useQuery("product", () => findProductService(params.id as string), {
    enabled: !!params.id,
  });

  const { mutate: createProduct } = useMutation(createProductService, {
    onSuccess: () => {
      queryClient.invalidateQueries("productList");
      queryClient.invalidateQueries("product");
    },
  });

  // const { mutate: removeProduct } = useMutation(deleteProductService, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("productList");
  //     queryClient.invalidateQueries("product");
  //   },
  // });

  // const { mutate: updateProduct } = useMutation(updateProductService, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("productList");
  //     queryClient.invalidateQueries("product");
  //   },
  // });

  // return {
  //   product,
  //   isLoading: isLoadingProduct || isLoadingProductList,
  //   productList,
  //   createProduct,
  //   removeProduct,
  //   updateProduct,
  // };

  return {
    product,
    isLoading:
      isLoadingProduct ||
      isFetchingProduct ||
      isLoadingProductList ||
      isFetchingProductList,
    productList,
    createProduct,
  };
};
