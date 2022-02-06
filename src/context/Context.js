import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [productsType, setProductsType] = useState({});

  return (
    <MyContext.Provider value={{ productsType, setProductsType }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
