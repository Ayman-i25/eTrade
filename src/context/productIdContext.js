import React, { createContext, useState } from "react";

export const ProductId = createContext();

const ProductIdContext = ({ children }) => {
  const [id, setId] = useState(null);
  return (
    <ProductId.Provider value={{ id, setId }}>{children}</ProductId.Provider>
  );
};

export default ProductIdContext;
