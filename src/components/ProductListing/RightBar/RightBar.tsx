import React, { useState, Fragment } from "react";
import styled from "styled-components";

import { ProductsByCategory } from "../../Slider/ProductsByCategory";

// import button element
import { DrawerButton } from "../../common/Button/DrawerButton";

// import filter drawer
import { FilterDrawer } from "../../Drawer/FilterDrawer";

// import pagination hoc
import Paginator from "../../../hoc/Paginator";

// import hook
import { useQueryInfinitePaginate } from "../../../hooks";

const productCardStyles = {
  productBackgroundColor: "#fff",
  Levelvisibility: "hidden",
  ProductDetailVisibility: "hidden",
  containerDirection: "row",
  containerright: "10%",
  containerTransform: "translateY(100%)",
  containertop: "70%",
};

const RightBar = ({
  ids,
  filterLabels,
  handleFilterProduct,
  paginatedProductList,
  productListData,
}) => {
  const [isFilterDrawer, setIsFilterDrawer] = useState(false);
  const toggleFilterDrawer = () => setIsFilterDrawer(!isFilterDrawer);

  console.log("paginated product list", paginatedProductList);

  return (
    <RightContainer>
      <ButtonWrapper>
        <DrawerButton
          onClick={() => toggleFilterDrawer()}
          customStyle={{ padding: "8px 0", fontWeight: "bold" }}
          wrapperStyle={{ width: "20%", margin: "unset" }}
        >
          <span>
            <i className="fa fa-filter"></i>
          </span>{" "}
          Filter
        </DrawerButton>
      </ButtonWrapper>
      <FilterDrawer
        open={isFilterDrawer}
        toggleFilterDrawer={toggleFilterDrawer}
        filterLabels={filterLabels}
        handleFilterProduct={handleFilterProduct}
        ids={ids}
      />

      {paginatedProductList.status === "success" && (
        <Fragment>
          <div>
            <Paginator
              dataLen={productListData.length}
              fetchData={() => paginatedProductList.setPage((page) => page + 1)}
              hasMore={paginatedProductList.canFetchMore}
            >
              <Products>
                {paginatedProductList?.data.map((page, i) => (
                  <React.Fragment key={i}>
                    {page?.data &&
                      page?.data.length > 0 &&
                      page?.data.map((item, idx) => (
                        <ProductsByCategory
                          key={idx}
                          item={item}
                          customStyles={productCardStyles}
                        />
                      ))}
                  </React.Fragment>
                ))}
              </Products>
            </Paginator>
          </div>
        </Fragment>
      )}
      {/* 
      <Products>
        {products.length > 0 ? (
          products.map((item, idx) => (
            <ProductsByCategory
              key={idx}
              item={item}
              customStyles={productCardStyles}
            />
          ))
        ) : (
          <NotFoundText></NotFoundText>
        )}
      </Products> */}
    </RightContainer>
  );
};

export default RightBar;

const ButtonWrapper = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`;

const RightContainer = styled.div``;

const NotFoundText = styled.p`
  grid-column: 1/-1;
  font-size: 40px;
  font-weight: 700;
  color: #5c2c90;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(240, auto);

  max-width: 1400px;
  margin: 0 auto;
  justify-items: center;

  margin-left: 10px;
  margin-right: 20px;

  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 650px) and (min-width: 300px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media only screen and (max-width: 980px) and (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (max-width: 1260px) and (min-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (min-width: 1261px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
`;
