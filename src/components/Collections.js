import React, { useEffect, useState } from "react";

import CollectionsCard from "./CollectionsCard";
import { Container, Stack } from "@mui/material";

import mova from "../api/mova";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    const result = await mova.get("./collections");

    setCollections(result.data);
  };

  useEffect(() => {
    getCollections();
  }, []);

  const renderCards = () => {
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
    <Stack direction="row" justifyContent="center" spacing={4}>
      {renderCards()}
    </Stack>
  );
};

export default Collections;
