import { Routes } from "src/configs/routes";
import Cart from "src/pages/Cart";
import CreateProduct from "src/pages/CreateProduct";
import NotFound from "src/pages/NotFound";
import Product from "src/pages/Product";
import ProductDetail from "src/pages/ProductDetail";
import Welcome from "src/pages/Welcome";

interface Route {
  key: string;
  url: string;
  Component: () => JSX.Element;
}

export const useRoute = () => {
  const routes: Route[] = [
    {
      key: "welcome",
      url: Routes.ROOT,
      Component: Welcome,
    },
    {
      key: "products",
      url: Routes.PRODUCT,
      Component: Product,
    },
    {
      key: "productsDetail",
      url: Routes.PRODUCT_DETAIL,
      Component: ProductDetail,
    },
    {
      key: "cart",
      url: Routes.CART,
      Component: Cart,
    },
    {
      key: "createProduct",
      url: Routes.CREATE_PRODUCT,
      Component: CreateProduct,
    },
    {
      key: "notFound",
      url: Routes.NOT_FOUND,
      Component: NotFound,
    },
  ];

  return { routes };
};
