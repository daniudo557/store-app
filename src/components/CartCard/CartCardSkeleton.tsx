import { Card, Skeleton } from "@mui/material";

const CartCardSkeleton = () => (
  <Card sx={{ display: "flex", width: "100%", marginBottom: 2, height: 164 }}>
    <Skeleton
      animation="wave"
      sx={{ width: "100%", height: "100%" }}
      variant="rectangular"
    />
  </Card>
);

export default CartCardSkeleton;
