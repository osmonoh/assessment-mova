import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import mova from "../api/mova";

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
      ({ picture, displayName, currentPrice, originalPrice }) => {
        return (
          <Grid item xs={4}>
            <img src={picture} alt={displayName} style={{ width: "100%" }} />
            <p>{displayName}</p>
            {/* <p>{originalPrice}</p> */}
            <p>{currentPrice}</p>
          </Grid>
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
