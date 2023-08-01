import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import ProductCard from "components/ProductCard";
import ProductCardSkeleton from "components/ProductCard/ProductCardSkeleton";
import Warning from "components/Warning";

import { useProduct } from "hooks/useProduct";

import { Product } from "domains/Product";
import "./ProductDetail.scss";

interface ContentProps {
  isLoading?: boolean;
  product?: Product;
}

const Content = (props: ContentProps) => {
  const { isLoading, product } = props;

  if (isLoading) return <ProductCardSkeleton />;

  if (!product) {
    return <Warning icon={<ErrorOutlineIcon />} message="No data found" />;
  }

  return <ProductCard product={product} type="large" />;
};

const ProductDetail = () => {
  const history = useHistory();
  const { product, isLoading } = useProduct();

  const handleClick = () => history.goBack();

  return (
    <div className="product-detail-container">
      <Typography
        variant="h5"
        component="a"
        onClick={handleClick}
        className="back-link"
        sx={{ flexGrow: 1 }}
        color="text.primary"
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        Go back
      </Typography>

      <Content product={product} isLoading={isLoading} />
    </div>
  );
};

export default ProductDetail;
