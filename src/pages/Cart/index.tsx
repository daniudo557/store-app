import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Collapse } from "@mui/material";
import CartCard from "components/CartCard";
import Warning from "components/Warning";
import { Product } from "domains/Product";
import { useProduct } from "hooks/useProduct";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import { RootState } from "redux/store";
import "./Cart.scss";

interface ContentProps {
  isLoading?: boolean;
  cartList?: Product[];
}
const Content = (props: ContentProps) => {
  const { isLoading, cartList } = props;

  if (isLoading) return <CartCard.Skeleton />;

  if (!cartList?.length) {
    return <Warning icon={<ErrorOutlineIcon />} message="No data on cart" />;
  }

  return (
    <TransitionGroup>
      {cartList?.map((product) => (
        <Collapse key={product.id}>
          <CartCard product={product} />
        </Collapse>
      ))}
    </TransitionGroup>
  );
};
const Cart = () => {
  const { productList, isLoading } = useProduct();
  const { cart } = useSelector((state: RootState) => state);
  const productsOnCart = cart.map((p) => p.id);

  const cartList = productList?.filter((product) =>
    productsOnCart.includes(product.id),
  );

  return (
    <div className="cart-container">
      <Content cartList={cartList} isLoading={isLoading} />
    </div>
  );
};

export default Cart;
