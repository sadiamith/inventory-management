import React, { useState } from "react";

// mui components
import { Typography, TextField, Box, Button, Paper } from "@mui/material";

// icons components
import { Add } from "@mui/icons-material";

// custom components
import BottomNav from "./BottomNav";
import { useProductContext } from "../contexts/ProductContext";

export default function CreateWarehouseEntry() {
  // input data
  const [name, setName] = useState("");

  // axios
  const { createNewWarehouse } = useProductContext();
  const data = JSON.stringify({
    data: {
      name: name,
    },
  });
  const handleCreateNewWarehouse = () => {
    createNewWarehouse(data);
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
          Add new Warehouse Entry
        </Typography>
        <TextField
          required
          id="filled-name"
          label="Name"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Button
          onClick={handleCreateNewWarehouse}
          variant="outlined"
          startIcon={<Add />}
        >
          Add Warehouse Entry
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
