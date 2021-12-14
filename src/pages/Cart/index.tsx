import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Collapse } from "@mui/material";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import CartCard from "src/components/CartCard";
import Warning from "src/components/Warning";
import { useProduct } from "src/hooks/useProduct";
import { RootState } from "src/redux/store";
import "./Cart.scss";

const Cart = () => {
  const { productList, isLoading } = useProduct();
  const { cart } = useSelector((state: RootState) => state);
  const productsOnCart = cart.map((p) => p.id);

  const cartList = productList?.filter((product) =>
    productsOnCart.includes(product.id)
  );

  const Content = () => {
    if (isLoading) return <h1>Loading...</h1>;

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

  return (
    <div className="cart-container">
      <Content />
    </div>
  );
};

export default Cart;
