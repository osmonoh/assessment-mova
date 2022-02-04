import React from "react";
import { Container, Stack } from "@mui/material";

import Categories from "./components/Categories";
import Collections from "./components/Collections";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Categories></Categories>
      <Collections></Collections>
    </Container>
  );
};

export default App;
