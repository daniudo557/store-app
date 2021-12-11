export enum Category {
  MEN_CLOTHING = "men's clothing",
  JEWELERY = "jewelery",
  ELECTRONICS = "electronics",
  WOMEN_CLOTHING = "women's clothing",
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: number;
}
