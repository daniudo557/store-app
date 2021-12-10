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
import { Link } from "react-router-dom";
import { Routes } from "src/configs/routes";
import { Product } from "src/domains/Product";
import "./CartCard.scss";

interface CartCardProps {
  product: Product;
}

const CartCard = ({ product }: CartCardProps) => {
  return (
    <Badge
      badgeContent={3}
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
            <Button size="small" color="error">
              Remove from cart
            </Button>

            <Button size="small">Add to cart</Button>
          </CardActions>
        </Box>
      </Card>
    </Badge>
  );
};

export default CartCard;
