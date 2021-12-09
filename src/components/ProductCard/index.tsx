import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        alt="todo list"
        height="200"
        image="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="flex-end">
            <Typography variant="h5" component="div">
              Titulo
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h6" color="text.secondary" sx={{ marginTop: 3 }}>
          Descricao
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
