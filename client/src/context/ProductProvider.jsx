import { createContext, useContext, useState, useEffect } from "react";
import { getProductsRequest } from "../api/products.api";

export const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductContextProvider");
  }

  return context;
};

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const response = await getProductsRequest();
    setProducts(response.data);
  }

  return (
    <ProductContext.Provider value={{ products, loadProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
