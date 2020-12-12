import React, { useState, useEffect } from "react";
import { ProductsByCategory } from "../../components/Slider/ProductsByCategory";

// import components
// import { ProductCard } from '../../components/Product';
// import { CatalogPlaceholder } from '../../components/Placeholders';

// import hooks
import { useQueryFetch } from "../../hooks";

const RelatedProducts = ({ productDetail, lingual }) => {
  const relatedProductState = useQueryFetch(
    "relatedProductList",
    {
      urlOptions: {
        placeHolders: {
          id: productDetail["id"],
        },
      },
    },
    `relatedProducts-${productDetail["id"]}`
  );

  const [productList, setCategoryListData] = useState([]);

  useEffect(() => {
    if (relatedProductState.isSuccess && relatedProductState.data) {
      setCategoryListData(relatedProductState.data);
    }
  }, [relatedProductState.isSuccess]);

  useEffect(() => {
    if (lingual.isBangla && relatedProductState.isSuccess) {
      const banglaCategoryList =
        relatedProductState.data && relatedProductState.data.length > 0
          ? relatedProductState.data.map((cat: any) => {
              return {
                ...cat,
                ...cat.bn,
              };
            })
          : [];
      // @ts-ignore
      setCategoryListData(banglaCategoryList);
    } else {
      const banglaCategoryList =
        relatedProductState.data && relatedProductState.data.length > 0
          ? relatedProductState.data.map((cat: any) => {
              return {
                ...cat,
              };
            })
          : [];
      // @ts-ignore
      setCategoryListData(banglaCategoryList);
    }
  }, [lingual, relatedProductState.isSuccess]);

  return (
    <>
      {relatedProductState.isSuccess &&
        relatedProductState.data &&
        productList &&
        productList[0] && (
          <>
            <div className="relatedProductsContainer">
              <h4 className="title">Related Products</h4>
              <div className="products">
                {productList.slice(0, 8).map((product, idx) => {
                  return (
                    <div className="single">
                      {/* <ProductCard
                            // @ts-ignore
                            product={product} /> */}
                      <ProductsByCategory
                        key={idx}
                        item={product}
                        customStyles={{ Levelvisibility: "visible" }}
                        isIcon={true}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
    </>
  );
};

export default RelatedProducts;
