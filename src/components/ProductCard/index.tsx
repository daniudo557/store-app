import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "src/domains/Product";
import CategoryTag from "../CategoryTag";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  return (
    <Card className="card">
      <CardMedia
        component="img"
        alt="todo list"
        height="200"
        image={product.image}
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="row"
            alignItems="flex-end"
            className="title-container"
          >
            <Typography variant="h5" component="div" className="title">
              {product.title}
            </Typography>
          </Stack>
        </Stack>

        <CategoryTag category={product.category} />

        <Rating value={product.rating.rate} readOnly />

        <Typography variant="h6" color="text.secondary" sx={{ marginTop: 3 }}>
          $ {product.price}
        </Typography>

        <div className="-container">
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginTop: 3 }}
            className="description"
          >
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
