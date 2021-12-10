import { Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import CartCard from "src/components/CartCard";
import { useProduct } from "src/hooks/useProduct";
import "./Cart.scss";

const Cart = () => {
  const { productList, isLoading } = useProduct();
  const productsOnCart = [1, 2, 3];

  const cartList = productList?.filter((product) =>
    productsOnCart.includes(product.id)
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="cart-container">
      <TransitionGroup>
        {cartList?.map((product) => (
          <Collapse key={product.id}>
            <CartCard product={product} />
          </Collapse>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Cart;
