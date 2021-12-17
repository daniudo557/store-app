import { Routes } from "configs/routes";
import Cart from "pages/Cart";
import CreateProduct from "pages/CreateProduct";
import NotFound from "pages/NotFound";
import Product from "pages/Product";
import ProductDetail from "pages/ProductDetail";
import Welcome from "pages/Welcome";

interface Route {
  key: string;
  url: string;
  protectedRoute: boolean;
  Component: () => JSX.Element;
}

export const useRoute = () => {
  const routes: Route[] = [
    {
      key: "welcome",
      url: Routes.ROOT,
      protectedRoute: false,
      Component: Welcome,
    },
    {
      key: "products",
      url: Routes.PRODUCT,
      protectedRoute: true,
      Component: Product,
    },
    {
      key: "productsDetail",
      url: Routes.PRODUCT_DETAIL,
      protectedRoute: true,
      Component: ProductDetail,
    },
    {
      key: "cart",
      url: Routes.CART,
      protectedRoute: true,
      Component: Cart,
    },
    {
      key: "createProduct",
      url: Routes.CREATE_PRODUCT,
      protectedRoute: true,
      Component: CreateProduct,
    },
    {
      key: "notFound",
      url: Routes.NOT_FOUND,
      protectedRoute: true,
      Component: NotFound,
    },
  ];

  return { routes };
};
