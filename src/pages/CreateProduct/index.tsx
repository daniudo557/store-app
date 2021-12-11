import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Category, Product } from "src/domains/Product";
import { useProduct } from "src/hooks/useProduct";
import "./CreateProduct.scss";

const CreateProduct = () => {
  const { createProduct } = useProduct();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [rating, setRating] = useState<number>(0);

  const productDataFilled =
    title && description && category && price && rating ? true : false;

  const categories = Object.values(Category);

  const cleanFields = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice(0);
    setRating(0);
  };

  const handleRegister = () => {
    const productData: Partial<Product> = {
      title: title,
      description: description,
      category: category as Category,
      price: price,
      rating: rating,
    };

    createProduct(productData);

    cleanFields();
  };

  return (
    <div className="create-product">
      <Typography variant="h3" color="textPrimary">
        Create Product
      </Typography>

      <div className="create-product-field-container">
        <div className="create-product-field">
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="create-product-field">
          <TextField
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="create-product-field">
          <TextField
            label="Price"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </div>

        <FormControl fullWidth>
          <InputLabel id="demo-multiple-name-label">Category</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            input={<OutlinedInput label="Category" />}
          >
            {categories.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="create-product-rating-field">
          <Typography
            color="textPrimary"
            component="legend"
            sx={{ alignItems: "end" }}
          >
            Rating:
          </Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            precision={0.25}
            onChange={(event: any, newValue: any) => {
              setRating(newValue);
            }}
          />
        </div>

        <Button
          onClick={handleRegister}
          disabled={!productDataFilled}
          variant="contained"
        >
          Register Product
        </Button>
      </div>
    </div>
  );
};

export default CreateProduct;
