import { Grid } from "@mui/material";
import ProductCard from "src/components/ProductCard";
import { useProduct } from "src/hooks/useProduct";

const Products = () => {
  const { productList, isLoading } = useProduct();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        maxWidth: 1024,
        alignSelf: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, xl: 1 }}
        >
          {productList?.map((product, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
