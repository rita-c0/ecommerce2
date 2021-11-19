export type Product = {
  UPC: string;
  name: string;
  image: string;
  price: {
    current: {
      value: number;
    };
    currency: string;
  };
  availability: {
    stock: number;
  };
  variants: Omit<Product, "variants">[];
};

export default Product;
