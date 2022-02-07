import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [productsType, setProductsType] = useState(
    JSON.parse(sessionStorage.getItem("productsType")) || {}
  );
  const [tagsFilter, setTagsFilter] = useState([]);

  return (
    <MyContext.Provider
      value={{ productsType, setProductsType, tagsFilter, setTagsFilter }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
