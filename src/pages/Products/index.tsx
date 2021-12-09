import { Grid } from "@mui/material";
import ProductCard from "src/components/ProductCard";

const Products = () => {
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
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
