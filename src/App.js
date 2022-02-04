import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";

import CategoriesCard from "./components/CategoriesCard";
import mova from "./api/mova";
import CollectionsCard from "./components/CollectionsCard";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);

  const getCategories = async () => {
    const result = await mova.get("./categories");

    setCategories(result.data);
  };
  const getCollections = async () => {
    const result = await mova.get("./collections");

    setCollections(result.data);
  };

  useEffect(() => {
    getCategories();
    getCollections();
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
  const renderCards2 = () => {
    return collections.map(({ displayName, collectionId }) => {
      return (
        <CollectionsCard
          displayName={displayName}
          collectionId={collectionId}
          key={collectionId}
        />
      );
    });
  };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="center" spacing={4}>
        {renderCards()}
      </Stack>

      <Stack direction="row" justifyContent="center" spacing={4}>
        {renderCards2()}
      </Stack>
    </Container>
  );
};

export default App;
