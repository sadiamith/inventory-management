import React, { useState } from "react";

// mui components
import { Typography, TextField, Box, Button, Paper } from "@mui/material";

// icons components
import { Add } from "@mui/icons-material";

// custom components
import BottomNav from "./BottomNav";
import { useProductContext } from "../contexts/ProductContext";

export default function CreateProductEntry() {
  // input data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [warehouse_location, setWarehouseLocation] = useState("");

  // axios
  const { createNewProduct } = useProductContext();
  const data = JSON.stringify({
    data: {
      name: name,
      description: description,
      warehouse_location: warehouse_location,
    },
  });
  const handleCreateNewProduct = () => {
    createNewProduct(data);
    window.location.reload();
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
          Add new Product Entry
        </Typography>
        <TextField
          required
          id="filled-name"
          label="Name"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="filled-animal"
          label="Description"
          variant="filled"
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          required
          id="filled-breed-input"
          label="Warehouse Location"
          variant="filled"
          helperText="Toronto, Vacouver, Saskatoon, Los Angeles"
          onChange={(e) => setWarehouseLocation(e.target.value)}
        />
      </div>
      <div>
        <Button
          onClick={handleCreateNewProduct}
          variant="outlined"
          startIcon={<Add />}
        >
          Add Product Entry
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
