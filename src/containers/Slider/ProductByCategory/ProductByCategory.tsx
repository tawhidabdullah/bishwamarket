///@ts-nocheck
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { ProductsByCategory } from "../../../components/Slider/ProductsByCategory";
import { MainSlider } from "../../../components/Slider/MainSlider";

import { useSelector } from "react-redux";

// import hooks
import { useQueryFetch, useHandleFetch } from "../../../hooks";
import { ProductNotFound } from "../../../components/ProductNotFound";

// import spinner
import { Spinner } from "../../../components/Spinner";
import { DrawerButton } from "../../../components/common/Button/DrawerButton";

// styles
const containerStyles = {
  width: "96%",
  margin: "20px auto 20px auto",
};

const ProductByCategory = () => {
  //previously saving category data in redux is getting back
  let category = useSelector((state) => state.category);

  //state
  const [selectedCateoryId, setSelectedCategoryId] = useState("");
  const [indexColor, setColor] = useState(0);
  const [products, setproducts] = useState([]);

  // toggle category labels on mobile view
  const [isCategoryLabels, setIsCategoryLabels] = useState(false);

  //setting initial selectedCateoryId
  useEffect(() => {
    if (category.length > 0) {
      setSelectedCategoryId(category[0].id);
    }
  }, [category.length]);

  //for data fetching hooks
  const [categoryProductsState, handleCategoryProductsFetch] = useHandleFetch(
    [],
    "categoryProducts"
  );
  //generating fetching url
  useEffect(() => {
    const setCategoryProducts = async () => {
      const newProductsRes = await handleCategoryProductsFetch({
        urlOptions: {
          placeHolders: {
            id: selectedCateoryId,
          },
          params: {
            isRecursive: true,
          },
        },
      });
    };

    if (selectedCateoryId) {
      setCategoryProducts();
    }
  }, [selectedCateoryId]);

  //setting products for category state
  useEffect(() => {
    if (
      categoryProductsState.done === true &&
      categoryProductsState.data.data
    ) {
      setproducts(categoryProductsState.data.data);
      let p = document.getElementsByClassName("categoryName");
      p[indexColor].classList.add("categoryName-active");
      p[indexColor].style.color = "#ff6000";
    } else {
      setproducts([]);
    }
  }, [categoryProductsState.data]);

  const responsive = {
    responsive: [
      {
        breakpoint: 3224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 1154,
        settings: { products },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  // const handleCategoryId = (id, index) => {
  //   setSelectedCategoryId(id);
  //   let p = document.getElementsByClassName("categoryName");
  //   p[index].classList.add("categoryName-active");
  //   p[index].style.color = "#ff6000";
  //   p[indexColor].style.color = "#444";
  //   setColor(index);
  // };

  return (
    <Section>
      {/* <MobileViewToggler onClick={() => setIsCategoryLabels((value) => !value)}>
        <DrawerButton>View Categories</DrawerButton>
      </MobileViewToggler> */}

      {/* {isCategoryLabels && ( */}
      <MobileCategoryLabels>
        {category.map((item, idx) => (
          <CategoryLabel
            className={
              item.id === selectedCateoryId
                ? "categoryName categoryName-active"
                : "categoryName"
            }
            key={idx}
            onClick={() => {
              // handleCategoryId(item.id, idx);
              setSelectedCategoryId(item.id);
              // setIsCategoryLabels(false);
            }}
          >
            {item.name}
          </CategoryLabel>
        ))}
      </MobileCategoryLabels>
      {/* )} */}

      <CategoryLabels>
        {category.map((item, idx) => (
          <CategoryLabel
            className={
              item.id === selectedCateoryId
                ? "categoryName categoryName-active"
                : "categoryName"
            }
            key={idx}
            // onClick={() => handleCategoryId(item.id, idx)}
            onClick={() => setSelectedCategoryId(item.id)}
          >
            {item.name}
          </CategoryLabel>
        ))}
      </CategoryLabels>

      <ProductsContainer style={containerStyles}>
        {categoryProductsState.isLoading ? (
          <Spinner />
        ) : products.length > 0 ? (
          <>
            <MobileView>
              {products.map((product, idx) => (
                <ProductsByCategory
                  key={idx}
                  item={product}
                  customStyles={{ Levelvisibility: "visible" }}
                  responsive={responsive}
                  isIcon={true}
                />
              ))}
            </MobileView>
            <DesktopView>
              <MainSlider
                responsive={responsive}
                ProductsByCategory={ProductsByCategory}
                data={products}
                customStyles={{
                  Levelvisibility: "visible",
                }}
              />
            </DesktopView>
          </>
        ) : (
          <ProductNotFound>No product found in this category</ProductNotFound>
        )}
      </ProductsContainer>
    </Section>
  );
};
export default ProductByCategory;

const ProductsContainer = styled.div`
  width: 96%;
  margin: 20px auto;
  @media screen and (max-width: 800px) {
    width: 80% !important;
  }

  @media screen and (max-width: 578px) {
    width: 100% !important;
  }
`;

const Section = styled.div`
  margin-top: 10px;
`;

const DesktopView = styled.div`
  @media screen and (max-width: 578px) {
    display: none;
  }
`;

const MobileView = styled.div`
  display: none;

  @media screen and (max-width: 578px) {
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 10px;
    margin: 0 10px;
  }
`;

const MobileViewToggler = styled.div`
  display: none;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 578px) {
    display: block;
  }
`;

const MobileCategoryLabels = styled.div`
  display: none;

  /* opacity: 0;
  transition: all 5s; */

  @media screen and (max-width: 578px) {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    flex-wrap: wrap;
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    /* opacity: 1;
    transition: all 5s; */
  }
`;

const CategoryLabels = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex-wrap: wrap;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px !important;
  margin-top: 25px !important;

  @media screen and (max-width: 578px) {
    display: none !important;
  }
`;

const CategoryLabel = styled.div`
  padding: 10px 10px 10px 5px;
  /* margin: 0 10px 10px 0; */
  letter-spacing: 0.05em;
  cursor: pointer;
  color: #444;
  text-transform: uppercase;
  font-weight: 550;
  /* background-color: #f2f2f2; */
  position: relative;
  line-height: 70px;
  margin-right: 15px;

  .categoryName-active {
  }

  &:hover {
    color: #ffcccb;
  }

  @media screen and (max-width: 578px) {
    line-height: 35px;
    padding: 0 5px;
    border: 1px solid #eee;
    margin: unset;
    font-weight: 500;
    margin: 5px;
  }
`;
