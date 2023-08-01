import { Card, Skeleton } from "@mui/material";
import "./ProductCard.scss";

const ProductCardSkeleton = () => (
  <Card className="card">
    <div
      style={{
        width: "100%",
        height: "590px",
      }}
    >
      <Skeleton
        animation="wave"
        sx={{ width: "100%", height: "100%" }}
        variant="rectangular"
      />
    </div>
  </Card>
);

export default ProductCardSkeleton;
