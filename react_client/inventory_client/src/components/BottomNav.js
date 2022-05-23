import * as React from "react";

// core components
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// icons
import { AddCircleOutline } from "@mui/icons-material";
import InventoryIcon from "@mui/icons-material/Inventory";

// contexts
import { useProductContext } from "../contexts/ProductContext";

export default function LabelBottomNavigation() {
  const { nav_value, changeNavValue } = useProductContext();
  const handleChange = (event, newValue) => {
    changeNavValue(newValue);
  };
  return (
    <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
      <BottomNavigationAction
        label="Products"
        value="ProductList"
        icon={<InventoryIcon />}
      />
      <BottomNavigationAction
        label="Add Product"
        value="AddProduct"
        icon={<AddCircleOutline />}
      />
      <BottomNavigationAction
        label="Add Warehouse"
        value="AddWarehouse"
        icon={<AddCircleOutline />}
      />
    </BottomNavigation>
  );
}
