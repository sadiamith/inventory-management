import React, { useState, useEffect } from "react";

// mui components
import { Typography, TextField, Box, Button, Paper } from "@mui/material";

// mui icons
import { Edit } from "@mui/icons-material";

// custom components
import BottomNav from "./BottomNav";

//axios
import { useProductContext } from "../contexts/ProductContext";
export default function EditProductEntry() {
  // input data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [warehouse_location, setWarehouseLocation] = useState("");

  // edit req
  const { updateProduct, productId } = useProductContext();
  const data = JSON.stringify({
    data: {
      name: name,
      description: description,
      warehouse_location: warehouse_location,
    },
  });
  const handleEditProduct = () => {
    updateProduct(productId, data);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h3" gutterBottom component="div">
          Edit Product entry
        </Typography>
        <TextField
          required
          id="filled-name"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="filled-description"
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          required
          id="filled-warehouse-input"
          label="Warehouse Location"
          variant="outlined"
          onChange={(e) => setWarehouseLocation(e.target.value)}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={handleEditProduct}
          startIcon={<Edit />}
        >
          Edit Product Entry
        </Button>
      </div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNav />
      </Paper>
    </Box>
  );
}
