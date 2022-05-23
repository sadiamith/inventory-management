import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//contexts
import { ProductProvider } from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
