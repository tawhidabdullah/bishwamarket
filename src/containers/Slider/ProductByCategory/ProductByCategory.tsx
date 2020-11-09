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

// styles
const containerStyles = {
  width: "95%",
  margin: "0 auto",
};

const ProductByCategory = () => {
  //previously saving category data in redux is getting back
  let category = useSelector((state) => state.category);

  //state
  const [selectedCateoryId, setSelectedCategoryId] = useState("");
  const [indexColor, setColor] = useState(0);
  const [products, setproducts] = useState([]);

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
      p[indexColor].style.color = "red";
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

    p[index].style.color = "red";
    p[indexColor].style.color = "#444";
    setColor(index);
  };

  return (
    <div style={containerStyles}>
      <Section>
        {/* give a component useful name
        FOR FUCK SAKE!!! */}
        <BB>
          {category.map((item, i) => (
            <Span
              className="categoryName"
              key={i}
              onClick={() => handleCategoryId(item.id, i)}
            >
              {item.name}
            </Span>
          ))}
        </BB>

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
      </Section>
    </div>
  );
};
export default ProductByCategory;

const Section = styled.div`
  margin-top: 10px;
`;

const BB = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex-wrap: wrap;
  background-color: #fff;
  width: 98%;
  margin: 0 auto;
  padding: 16px 0 16px 10px;
`;

const Span = styled.div`
  padding: 10px 10px 10px 5px;

  margin-right: 10px;
  /* margin-bottom: 10px; */

  letter-spacing: 0.05em;
  cursor: pointer;
  color: #444;
  text-transform: uppercase;
  font-weight: 400;

  background-color: #f2f2f2;

  &:hover {
    color: #ffcccb;
  }
`;
