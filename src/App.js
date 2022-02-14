import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Stack } from "@mui/material";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Cart />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:id" element={<Products />} />
          <Route path="/collection/:id" element={<Products />} />
          <Route path="/item/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
