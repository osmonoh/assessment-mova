import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";

const ProductsCard = ({
  itemId,
  picture,
  displayName,
  currentPrice,
  originalPrice,
  tags,
}) => {
  return (
    <Grid item xs={4}>
      <Link to={"/item/" + itemId}>
        <img src={picture} alt={displayName} style={{ width: "100%" }} />
        <p>{displayName}</p>
        {/* <p>{originalPrice}</p> */}
        <p>{currentPrice}</p>
      </Link>
    </Grid>
  );
};

export default ProductsCard;
