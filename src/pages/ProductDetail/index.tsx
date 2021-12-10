import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import ProductCard from "src/components/ProductCard";
import ProductCardSkeleton from "src/components/ProductCard/ProductCardSkeleton";
import Warning from "src/components/Warning";
import { useProduct } from "src/hooks/useProduct";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const history = useHistory();
  const { product, isLoading } = useProduct();

  const handleClick = () => history.goBack();
  console.log({ product, isLoading });

  const Content = () => {
    if (isLoading) return <ProductCardSkeleton />;

    if (!product) {
      return <Warning icon={<ErrorOutlineIcon />} message="No data found" />;
    }

    return <ProductCard product={product} type="large" />;
  };

  return (
    <div className="product-detail-container">
      <Typography
        variant="h5"
        component="a"
        onClick={handleClick}
        className="back-link"
        sx={{ flexGrow: 1 }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        Go back
      </Typography>

      <Content />
    </div>
  );
};

export default ProductDetail;
