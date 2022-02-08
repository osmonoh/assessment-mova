import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import mova from "../api/mova";

import ProductsFilterBtn from "./ProductsFilterBtn";
import ProductsCard from "./ProductsCard";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const Products = () => {
  const { productsType } = useContext(MyContext);
  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async (type) => {
    const result = await mova.get("./items", {
      params: type,
    });
    setProducts(result.data);
  };

  useEffect(() => {
    getProducts(productsType);
  }, [productsType]);

  useEffect(() => {
    if (tagsFilter.length) {
      setFilteredProducts(
        products.filter((item) => tagsFilter.includes(item.tags[0]))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [tagsFilter]);

  const renderFilterBtns = () => {
    return [
      ...new Set(products.reduce((acc, item) => acc.concat(item.tags), [])),
    ].map((item, index) => {
      return <ProductsFilterBtn key={index} tag={item} />;
    });
  };

  const renderCards = () => {
    const productsArr = filteredProducts.length ? filteredProducts : products;
    return productsArr.map((item) => {
      const {
        itemId,
        picture,
        displayName,
        currentPrice,
        originalPrice,
        tags,
      } = item;

      return (
        <ProductsCard
          key={itemId}
          item={item}
          itemId={itemId}
          picture={picture}
          displayName={displayName}
          currentPrice={currentPrice}
          originalPrice={originalPrice}
          tags={tags}
        />
      );
    });
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {renderCards()}
      </Grid>
      <Grid container spacing={4}>
        {renderFilterBtns()}
      </Grid>
    </Box>
  );
};

export default Products;
