import * as React from "react";

// mui components
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";

// custom components
import BottomNav from "./BottomNav";
import ProductListItem from "./ProductListItem";

// data
import { useProductContext } from "../contexts/ProductContext";

// icons
import { PersonOutline, LocationOn } from "@mui/icons-material";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function ProductList() {
  const { products } = useProductContext();
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <List>
        {products &&
          products.map(
            (
              { id, attributes: { name, description, warehouse_location } },
              i
            ) => (
              <ProductListItem
                key={i}
                id={id}
                petFieldData={[
                  { icon: <PersonOutline />, attrib: name },
                  { icon: <InventoryIcon />, attrib: description },
                  { icon: <LocationOn />, attrib: warehouse_location },
                ]}
              />
            )
          )}
      </List>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNav />
      </Paper>
    </Box>
  );
}
