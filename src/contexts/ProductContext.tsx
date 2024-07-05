import { createContext, FC, ReactNode, useEffect, useState } from "react";

export interface ProductProviderProps {
  children: ReactNode;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount?: number;
}

export const ProductContext = createContext<Product[] | null>(null);

const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
