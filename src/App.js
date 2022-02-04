import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";

import Categories from "./components/Categories";

import CollectionsCard from "./components/CollectionsCard";
import mova from "./api/mova";

const App = () => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    const result = await mova.get("./collections");

    setCollections(result.data);
  };

  useEffect(() => {
    getCollections();
  }, []);

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
      <Categories></Categories>

      <Stack direction="row" justifyContent="center" spacing={4}>
        {renderCards2()}
      </Stack>
    </Container>
  );
};

export default App;
