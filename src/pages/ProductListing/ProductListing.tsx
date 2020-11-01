  
import React from 'react'
import { ProductListContainer } from "../../containers/ProductListContainer";
const ProductListing=({products})=> {
    console.log(products, "ProductListingProductListing");
    return (
      <ProductListContainer
        //@ts-ignore
        products={products}
      />
    );
}


export default ProductListing;