import React, { useContext } from "react";

import { MyContext } from "../context/MyContext";

const ProductDetails = () => {
  const { product } = useContext(MyContext);

  return (
    <div>
      <img src={product.picture} alt={product.displayName} />
      <p>HELLO PD</p>
    </div>
  );
};

export default ProductDetails;
