import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import ProductCard from "src/components/ProductCard";
import Warning from "src/components/Warning";
import { useProduct } from "src/hooks/useProduct";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const history = useHistory();
  const { product, isLoading } = useProduct();

  const handleClick = () => history.goBack();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        maxWidth: 1024,
        width: "100%",
        alignSelf: "center",
      }}
    >
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
      {product ? (
        <ProductCard product={product} type="large" />
      ) : (
        <Warning icon={<ErrorOutlineIcon />} message="No data found" />
      )}
    </div>
  );
};

export default ProductDetail;
