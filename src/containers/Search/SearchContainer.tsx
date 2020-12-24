//@ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import component
import { SearchContain } from "../../components/Search/SearchContain/";
import { SearchField } from "../../components/Search/SearchField";
import { ProductsByCategory } from "../../components/Slider/ProductsByCategory";

import {
  useQueryFetch,
  useHandleFetch,
  useQueryInfinitePaginate,
} from "../../hooks";

// import spinner
import Spinner from "../../components/Spinner/Spinner";

// import pagination hoc
import { Paginator } from "../../hoc/Paginator";

const productCardStyles = {
  productBackgroundColor: "#fff",
  Levelvisibility: "hidden",
  ProductDetailVisibility: "hidden",
  containerDirection: "row",
  containerright: "10%",
  containerTransform: "translateY(100%)",
  containertop: "70%",
  page: "search",
};

const SearchContainer = () => {
  const [key, setkey] = useState("");
  const [products, setProducts] = useState([]);
  const [queryValue, setQueryValue] = useState("");

  const [productState, handleProductSearchFetch] = useHandleFetch(
    [],
    "productSearch"
  );

  // const paginatedProductList = useQueryInfinitePaginate("productSearch", {
  //   urlOptions: {
  //     params: {
  //       queryValue,
  //     },
  //   },
  // });

  // console.log("paginate product list", paginatedProductList);

  useEffect(() => {
    const setSearchCategoryProducts = async () => {
      const newProductsRes = await handleProductSearchFetch({
        urlOptions: {
          params: {
            queryValue,
          },
        },
      });

      if (newProductsRes) {
        setProducts(newProductsRes);
      }
    };
    setSearchCategoryProducts();
  }, [queryValue]);

  return (
    <Section>
      <SearchContain title={"search"} />
      <SearchField setQueryValue={setQueryValue} />

      <SearchProduct>
        {productState.isLoading ? (
          <Spinner />
        ) : (
          // <Paginator
          //   dataLen={paginatedProductList.data?.[0]?.total}
          //   fetchData={() => paginatedProductList.setPage((page) => page + 1)}
          //   hasMore={paginatedProductList.canFetchMore}
          // >
          //   <Main>
          //     {paginatedProductList?.data.map((page, i) => (
          //       <React.Fragment key={i}>
          //         {page?.data &&
          //           page?.data.length > 0 &&
          //           page?.data.map((item, idx) => (
          //             <ProductsByCategory
          //               key={idx}
          //               item={item}
          //               customStyles={productCardStyles}
          //             />
          //           ))}
          //       </React.Fragment>
          //     ))}
          //   </Main>
          // </Paginator>

          <Main>
            {products.map((item) => {
              return (
                <ProductsByCategory
                  customStyles={productCardStyles}
                  item={item}
                />
              );
            })}
          </Main>
        )}
      </SearchProduct>
    </Section>
  );
};

const SearchProduct = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-auto-rows: minmax(240px, auto); */

  justify-items: center;

  margin-left: 10px;
  margin-right: 20px;
  grid-gap: 10px;

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  @media only screen and (max-width: 980px) and (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 630px) and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 1200px) and (min-width: 980px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 1500px) and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Section = styled.div``;

export default SearchContainer;
