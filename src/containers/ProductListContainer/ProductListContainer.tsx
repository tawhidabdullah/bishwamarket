//@ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LeftBar } from "../../components/ProductListing/LeftBar";
import { RightBar } from "../../components/ProductListing/RightBar";
import { SearchContain } from "../../components/Search/SearchContain/";
import queryString from "query-string";

import { useParams, useLocation } from "react-router-dom";

// import hooks
import { useHandleFetch } from "../../hooks";

const ProductListContainer = () => {
  const [productSearchState, handleProductSearchFetch] = useHandleFetch(
    [],
    "productSearch"
  );

  const location = useLocation();
  const [searchproduct, setproduct] = useState([]);
  let queryValue = queryString.parse(location.search).query;

  useEffect(() => {
    const setSearchCategoryProducts = async () => {
      const newProductsRes = await handleProductSearchFetch({
        urlOptions: {
          params: {
            queryValue,
          },
        },
      });
    };
    setSearchCategoryProducts();
  }, [queryValue]);

  useEffect(() => {
    if (productSearchState.data) setproduct(productSearchState.data);
    else {
      setproduct([]);
    }
  }, [productSearchState.isLoading]);
  return (
    <Main>
      <SearchContain title={"CATEGORY"} />
      <Section>
        {/* <LeftBar /> */}

        <RightBar products={searchproduct} />
      </Section>
    </Main>
  );
};

export default ProductListContainer;

const Section = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 3fr;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
`;
