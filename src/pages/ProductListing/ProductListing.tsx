import React from "react";
import { ProductListContainer } from "../../containers/ProductListContainer";
const ProductListing = ({ products }) => {
  return (
    <ProductListContainer
      //@ts-ignore
      products={products}
    />
  );
};

export default ProductListing;
