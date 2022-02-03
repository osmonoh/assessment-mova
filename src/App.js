import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";

import CategoriesCard from "./components/CategoriesCard";
import mova from "./api/mova";

const App = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const result = await mova.get("./categories");

    setCategories(result.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderCards = () => {
    return categories.map(({ displayName, categoryId, parentId }) => {
      if (parentId === "root")
        return (
          <CategoriesCard
            displayName={displayName}
            categoryId={categoryId}
            key={categoryId}
          />
        );
    });
  };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="center" spacing={4}>
        {renderCards()}
      </Stack>
    </Container>
  );
};

export default App;
