//@ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

// import component
import { LeftBar } from "../../components/ProductListing/LeftBar";
import { RightBar } from "../../components/ProductListing/RightBar";

// utility for converting id object to id array
import { convertParamsId } from "../../utils";

// import hooks
import { useHandleFetch } from "../../hooks";

// import loader
import { SuspenseLoader } from "../../components/Spinner";

const ProductListContainer = () => {
  // this state stores existing ids in localstorage
  const [ids, setIds] = useState([]);

  const [filterParams, setFilterParams] = useState([]);

  const [filterLabels, setFilterLabels] = useState({
    Tag: [],
    Category: [],
    Brand: [],
  });

  const [productListState, handleProductListFetch] = useHandleFetch(
    [],
    "filterProduct"
  );

  const [tagState, handleTagFetch] = useHandleFetch({}, "tagList");
  const [brandState, handleBrandFetch] = useHandleFetch({}, "brandList");
  const [categoryState, handleCategoryFetch] = useHandleFetch(
    {},
    "categoryList"
  );

  //ANCHOR filter logic
  // what to expect from this handler ?
  // it will recieve an object/objectId as params
  // check if this objectId exists in localstorage ?
  // if not add it else remove from localstorage ?

  const handleFilterProduct = (opt) => {
    let id = opt.id;
    // convert label to lowercase for convenience
    let label = opt.header.toLowerCase();

    // parse existing filters from localstorage
    let filterIds =
      localStorage.filter && localStorage.filter.length > 0
        ? JSON.parse(localStorage.filter)
        : [];
    // hmm! seems like we have filterIds in localstorage.
    // let's check whether incoming id exists in filterIds
    let isExist = filterIds.find((param) => Object.values(param).join() === id);

    if (!isExist) {
      // newParams[filterIds, {[filter]: id}]
      filterIds = [...filterIds, { [label]: id }];
    } else {
      // alert! there is an imposter among us
      // nadal, execute him/her
      filterIds = filterIds.filter(
        (param) => Object.values(param).join() !== id
      );
    }

    setFilterParams(filterIds);
    localStorage.setItem("filter", JSON.stringify(filterIds));
  };

  useEffect(() => {
    if (localStorage.filter) {
      setIds(convertParamsId(JSON.parse(localStorage.filter)));
    }
  }, [filterParams]);

  useEffect(() => {
    if (localStorage.filter) {
      setFilterParams(JSON.parse(localStorage.filter));
    }
  }, []);

  const location = useLocation();
  const [products, setproducts] = useState([]);
  let queryValue = queryString.parse(location.search).query;

  useEffect(() => {
    const fetchProductList = async () => {
      const productRes = await handleProductListFetch({
        body: filterParams,
        urlOptions: {
          params: {
            queryValue,
          },
        },
      });

      if (productRes.data) {
        // console.log("productRes", productRes);
        setproducts(productRes.data);
      } else {
        setproducts([]);
      }
    };
    fetchProductList();
  }, [queryValue, filterParams]);

  useEffect(() => {
    const fetchLabels = async () => {
      const tagRes = await handleTagFetch({});
      const brandRes = await handleBrandFetch({});
      const categoryRes = await handleCategoryFetch({});

      setFilterLabels({
        Tag: tagRes,
        Category: categoryRes,
        Brand: brandRes,
      });
    };

    fetchLabels();
  }, []);

  return (
    <>
      {(productListState.isLoading ||
        brandState.isLoading ||
        tagState.isLoading ||
        categoryState.isLoading) && <SuspenseLoader />}
      <Main>
        {/* <SearchContain title={"CATEGORY"} /> */}
        <Section>
          <LeftBar
            filterLabels={filterLabels}
            ids={ids}
            handleFilterProduct={handleFilterProduct}
          />

          <RightBar
            ids={ids}
            filterLabels={filterLabels}
            handleFilterProduct={handleFilterProduct}
            products={products}
          />
        </Section>
      </Main>
    </>
  );
};

export default ProductListContainer;

const Section = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr;
  margin: 0 90px;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0 auto;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 40px 20px; */
  margin-top: 20px;
`;
