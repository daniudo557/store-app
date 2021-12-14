import { Collapse } from '@mui/material';
import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import CartCard from 'src/components/CartCard';
import { useProduct } from 'src/hooks/useProduct';
import { RootState } from 'src/redux/store';
import './Cart.scss';

const Cart = () => {
  const { productList, isLoading } = useProduct();
  const { cart } = useSelector((state: RootState) => state);
  const productsOnCart = cart.map((p) => p.id);

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
