import { Grid } from "@mui/material";

import ProductCard from "components/ProductCard";
import ProductCardSkeleton from "components/ProductCard/ProductCardSkeleton";
import { useProduct } from "hooks/useProduct";

import "./Product.scss";

const Product = () => {
  const { productList, isLoading } = useProduct();

  const Content = () => {
    if (isLoading) {
      return (
        <>
          {Array.from(Array(20)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <ProductCardSkeleton />
            </Grid>
          ))}
        </>
      );
    }

    return (
      <>
        {productList?.map((product, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </>
    );
  };

  return (
    <div className="product-container">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, xl: 1 }}
      >
        <Content />
      </Grid>
    </div>
  );
};

export default Product;
