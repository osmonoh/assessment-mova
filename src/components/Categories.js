import React, { useEffect, useState } from "react";

import CategoriesCard from "./CategoriesCard";

import mova from "../api/mova";

import { Container, Stack } from "@mui/material";

const Categories = () => {
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
    <Stack direction="row" justifyContent="center" spacing={4}>
      {renderCards()}
    </Stack>
  );
};

export default Categories;
