import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import mova from "../api/mova";

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
    return products.map((item) => {
      return (
        <p key={item.itemId}>
          {item.displayName}
          <span>
            {" "}
            - {item.categoryId} - {item.collectionId}
          </span>
        </p>
      );
    });
  };

  return <div>{renderCards()}</div>;
};

export default Products;
