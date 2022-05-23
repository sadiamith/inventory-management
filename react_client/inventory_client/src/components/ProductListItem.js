import React, { useState } from "react";

// mui components
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

// mui icons
import { IconButton, ListItem } from "@mui/material";
import {
  DeleteOutline,
  Edit,
  ExpandMore,
  ExpandLess,
  LabelImportantOutlined,
} from "@mui/icons-material";

// nav
import { useProductContext } from "../contexts/ProductContext";
export default function ProductListItem({ petType, id, petFieldData }) {
  const [open, setOpen] = useState(true);
  const { deleteProduct, changeNavValue, getProductId } = useProductContext();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleEditButton = () => {
    getProductId(id);
    changeNavValue("EditProduct");
  };
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        secondaryAction={
          <>
            <IconButton onClick={handleEditButton} edge="end" aria-label="edit">
              <Edit sx={{ color: "green" }} />
            </IconButton>
            <IconButton
              onClick={() => deleteProduct(id)}
              edge="end"
              aria-label="delete"
              sx={{ padding: 2 }}
            >
              <DeleteOutline color="secondary" />
            </IconButton>
          </>
        }
      >
        <ListItemButton disableRipple onClick={handleClick}>
          <ListItemIcon>
            <LabelImportantOutlined />
          </ListItemIcon>
          <ListItemText
            primary={petType}
            secondary="Name, Description, Warehouse Location"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {petFieldData.map((item, i) => (
            <ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.attrib} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
