import React, { useEffect, useState } from "react";
import mova from "../api/mova";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async (type, value) => {
    const result = await mova.get("./items", {
      params: { [type]: value },
    });

    setProducts(result.data);
  };

  useEffect(() => {
    getProducts("category", "men");
  }, []);

  const renderCards = () => {
    return products.map((item) => {
      return (
        <p key={item.itemId}>
          {item.displayName}
          <span> - {item.collectionId}</span>
        </p>
      );
    });
  };

  return <div>{renderCards()}</div>;
};

export default Products;
