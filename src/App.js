import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Stack } from "@mui/material";

import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:id" element={<Products />} />
          <Route path="/collection/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
