import React from "react";

// custom component
import ProductList from "../components/ProductList";
import CreateProductEntry from "../components/CreateProductEntry";
import EditProductEntry from "../components/EditProductEntry";
import CreateWareHouseEntry from "../components/CreateWarehouseEntry";

// contexts
import { useProductContext } from "../contexts/ProductContext";
const Interface = () => {
  const { nav_value } = useProductContext();

  switch (nav_value) {
    case "ProductList":
      return <ProductList />;
    case "AddProduct":
      return <CreateProductEntry />;
    case "EditProduct":
      return <EditProductEntry />;
    case "AddWarehouse":
      <CreateWareHouseEntry />;
    default:
      return <ProductList />;
  }
};
export default Interface;
