import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import mova from "../api/mova";

import ProductsCard from "./ProductsCard";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const Products = () => {
  const { productsType } = useContext(MyContext);
  const [products, setProducts] = useState([]);

  const getProducts = async (type) => {
    const result = await mova.get("./items", {
      params: type,
    });
    setProducts(result.data);
  };

  useEffect(() => {
    getProducts(productsType);
  }, [productsType]);

  const renderCards = () => {
    return products.map(
      ({ itemId, picture, displayName, currentPrice, originalPrice, tags }) => {
        return (
          <ProductsCard
            key={itemId}
            itemId={itemId}
            picture={picture}
            displayName={displayName}
            currentPrice={currentPrice}
            originalPrice={originalPrice}
            tags={tags}
          />
        );
      }
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {renderCards()}
      </Grid>
    </Box>
  );
};

export default Products;
