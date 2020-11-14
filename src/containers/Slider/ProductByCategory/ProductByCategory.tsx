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

  const handleCategoryId = (id, index) => {
    setSelectedCategoryId(id);
    let p = document.getElementsByClassName("categoryName");
    p[index].classList.add("categoryName-active");
    p[index].style.color = "#ff6000";
    p[indexColor].style.color = "#444";
    setColor(index);
  };

  return (
    <Section>
      <MobileViewToggler onClick={() => setIsCategoryLabels((value) => !value)}>
        <DrawerButton>View Categories</DrawerButton>
      </MobileViewToggler>

      {isCategoryLabels && (
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
                handleCategoryId(item.id, idx);
                setIsCategoryLabels(false);
              }}
            >
              {item.name}
            </CategoryLabel>
          ))}
        </MobileCategoryLabels>
      )}

      <CategoryLabels>
        {category.map((item, idx) => (
          <CategoryLabel
            className="categoryName"
            key={idx}
            onClick={() => handleCategoryId(item.id, idx)}
          >
            {item.name}
          </CategoryLabel>
        ))}
      </CategoryLabels>

      <div style={containerStyles}>
        {categoryProductsState.isLoading ? (
          <Spinner />
        ) : products.length > 0 ? (
          <MainSlider
            responsive={responsive}
            ProductsByCategory={ProductsByCategory}
            data={products}
            customStyles={{
              Levelvisibility: "visible",
            }}
          />
        ) : (
          <ProductNotFound>No product found in this category</ProductNotFound>
        )}
      </div>
    </Section>
  );
};
export default ProductByCategory;

const Section = styled.div`
  margin-top: 10px;
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
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex-wrap: wrap;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0 16px 10px;

  /* opacity: 0;
  transition: all 5s; */

  @media screen and (max-width: 578px) {
    display: flex !important;
    flex-wrap: wrap;
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
  -webkit-letter-spacing: 0.05em;
  -moz-letter-spacing: 0.05em;
  -ms-letter-spacing: 0.05em;
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
`;
