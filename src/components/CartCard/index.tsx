import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Routes } from "src/configs/routes";
import { Product } from "src/domains/Product";
import { findProdInCartById } from "src/helpers/cart";
import { decrement, increment } from "src/redux/cart";
import { AppDispatch, RootState } from "src/redux/store";
import "./CartCard.scss";
import CartCardSkeleton from "./CartCardSkeleton";

interface CartCardProps {
  product: Product;
}

const CartCard = ({ product }: CartCardProps) => {
  const { cart } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const prodInCart = findProdInCartById(cart, product.id);

  return (
    <Badge
      badgeContent={prodInCart?.count ?? 0}
      color="warning"
      sx={{ display: "flex", width: "100%" }}
    >
      <Card
        sx={{ display: "flex", width: "100%", marginBottom: 2, height: 164 }}
      >
        <CardMedia component="img" sx={{ width: 151 }} image={product.image} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="body1"
              color="text.secondary"
              className="title"
            >
              {product.title}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Price: $ {product.price}
            </Typography>

            <Button
              component={Link}
              to={`${Routes.PRODUCT}/${product.id}`}
              color="primary"
              size="small"
              variant="outlined"
              sx={{ marginTop: 2 }}
            >
              See details
            </Button>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              color="error"
              onClick={() => {
                dispatch(decrement(product.id));
              }}
            >
              Remove from cart
            </Button>

            <Button
              size="small"
              onClick={() => {
                dispatch(increment(product.id));
              }}
            >
              Add to cart
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Badge>
  );
};

CartCard.Skeleton = CartCardSkeleton;

export default CartCard;
