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
import { Link } from "react-router-dom";
import { Routes } from "src/configs/routes";
import { Product } from "src/domains/Product";
import CategoryTag from "../CategoryTag";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
  type?: "small" | "large";
}

const ProductCard = (props: ProductCardProps) => {
  const { product, type = "small" } = props;

  return (
    <Badge badgeContent={3} color="warning" sx={{ width: "100%" }}>
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
          <Button size="small" color="error">
            Remove from cart
          </Button>

          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
    </Badge>
  );
};

export default ProductCard;
