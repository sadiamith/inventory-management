import React, { createContext, useContext, useEffect, useState } from "react";
import http from "../http";

// create Pet Context
const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState("");
  const [nav_value, set_nav_value] = useState("ProductList");
  const [productId, setProductId] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const createNewProduct = async (data) => {
    await http.post("/api/products", data);
  };

  const createNewWarehouse = async (data) => {
    await http.post("/api/warehouses", data);
  };

  const updateProduct = async (productId, data) => {
    await http.put(`/api/products/${productId}`, data);
    window.location.reload();
  };

  const deleteProduct = async (productId) => {
    await http.delete(`/api/products/${productId}`);
    window.location.reload();
  };

  const changeNavValue = (value) => {
    set_nav_value(value);
  };

  const getProductId = (id) => {
    setProductId(id);
  };

  useEffect(() => {
    const readAllProducts = async () => {
      const response = await http.get("/api/products");
      const responseArr = Object.values(response.data.data);
      setProducts(responseArr);
    };
    return readAllProducts;
  }, []);

  const value = {
    createNewProduct,
    createNewWarehouse,
    products,
    updateProduct,
    deleteProduct,
    changeNavValue,
    nav_value,
    getProductId,
    productId,
  };

  // context provider
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
