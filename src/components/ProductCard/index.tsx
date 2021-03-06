import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Routes } from "configs/routes";
import { Product } from "domains/Product";
import { findProdInCartById } from "helpers/cart";

import { CartProduct, decrement, increment } from "redux/cart";
import { AppDispatch, RootState } from "redux/store";

import CategoryTag from "../CategoryTag";
import "./ProductCard.scss";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface ProductCardProps {
  product: Product;
  type?: "small" | "large";
}

const ProductCard = (props: ProductCardProps) => {
  const { product, type = "small" } = props;
  const { cart } = useSelector<RootState, { cart: CartProduct[] }>(
    (state) => state
  );

  const prodInCart = findProdInCartById(cart, product.id);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Badge
      sx={{ width: "100%" }}
      badgeContent={prodInCart?.count ?? 0}
      color="warning"
    >
      <Card className="card">
        <CardMedia
          component="img"
          alt="product image"
          height="200"
          image={product.image}
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Stack
              sx={{ marginBottom: 1 }}
              direction="row"
              alignItems="flex-end"
              className={type === "small" ? "title-container" : undefined}
            >
              <Typography
                variant="h5"
                component="div"
                className={type === "small" ? "title" : undefined}
              >
                {product.title}
              </Typography>
            </Stack>
          </Stack>

          <CategoryTag category={product.category} />

          <Stack direction="row" sx={{ marginTop: 2 }}>
            <Typography variant="body1" color="text.secondary">
              Rating:
            </Typography>
            <Rating
              value={product.rating}
              size="small"
              style={{ marginTop: 1, marginLeft: 4 }}
              readOnly
            />
          </Stack>

          <Typography variant="body1" color="text.secondary">
            Price: $ {product.price}
          </Typography>

          <div className="description-container">
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginTop: 2 }}
              className={type === "small" ? "description" : undefined}
            >
              Description: {product.description}
            </Typography>
          </div>

          {type === "small" && (
            <Button
              component={Link}
              to={`${Routes.PRODUCT}/${product.id}`}
              color="primary"
              sx={{ marginTop: 3 }}
              variant="outlined"
            >
              See details
            </Button>
          )}
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
      </Card>
    </Badge>
  );
};

ProductCard.Skeleton = ProductCardSkeleton;

export default ProductCard;
