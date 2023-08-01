import { Grid } from "@mui/material";

import ProductCard from "components/ProductCard";
import { Product as ProductType } from "domains/Product";
import { useProduct } from "hooks/useProduct";

import "./Product.scss";

interface ContentProps {
  isLoading?: boolean;
  productList?: ProductType[];
}
const Content = (props: ContentProps) => {
  const { isLoading, productList } = props;

  if (isLoading) {
    return (
      <>
        {Array.from(Array(20)).map((item) => (
          <Grid item xs={12} sm={4} md={4} key={item}>
            <ProductCard.Skeleton />
          </Grid>
        ))}
      </>
    );
  }

  return (
    <div>
      {productList?.map((product) => (
        <Grid item xs={12} sm={4} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </div>
  );
};

const Product = () => {
  const { productList, isLoading } = useProduct();

  return (
    <div className="product-container">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, xl: 1 }}
      >
        <Content productList={productList} isLoading={isLoading} />
      </Grid>
    </div>
  );
};

export default Product;
