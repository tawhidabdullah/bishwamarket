import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { ProductsByCategory } from "../../../components/Slider/ProductsByCategory";
import { MainSlider } from "../../../components/Slider/MainSlider";
import { Blog } from "../../../components/Banner/Blog";
import { Productcontain } from "../../../components/Navigation/ProductConatain";

import { useSelector } from "react-redux";
// import hooks
import { useQueryFetch, useHandleFetch } from '../../../hooks';

const ProductByCategory = () => {
  let category = useSelector((state) => state.category);

  const [selectedCateoryId, setSelectedCategoryId] = useState("");

  const [categoryProductsData, setCategoryProductsData] = useState([]);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    if (category.length > 0) {
      setSelectedCategoryId(category[0].id);
    }
  }, []);

const [categoryProductsState, handleCategoryProductsFetch] = useHandleFetch(
  [],
  "categoryProducts"
);

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


      console.log(newProductsRes, "newProductsRes");
    };

    if (selectedCateoryId) {
      setCategoryProducts();
    }
  }, [selectedCateoryId]);



  useEffect(() => {
    if (
    
      categoryProductsState.done===true
    
    ) {
      setCategoryProductsData(categoryProductsState.data);
 console.log(categoryProductsState.data, "categoryProductsState");
 setproducts(categoryProductsState.data.data);
    }
  }, [categoryProductsState.done]);




  const responsive = {
    responsive: [
      {
        breakpoint: 3224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },

      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },

      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const handleCategoryId = (id) => {
    setSelectedCategoryId(id);
  };

  return (
    <Section>
      <BB>
        {category.map((item) => (
          <Span onClick={() => handleCategoryId(item.id)}>{item.name}</Span>
        ))}
      </BB>

      <MainSlider
        responsive={responsive}
        ProductsByCategory={ProductsByCategory}
        data={products}
        customStyles={{
          Levelvisibility: "visible",
        }}
      />
    </Section>

    //level &&
  );
};
export default ProductByCategory;

const Section = styled.div``;

const BB = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex-wrap: wrap;
  background-color: #fff;

  padding-bottom: 41px;
  padding-top: 41px;
`;

const Span = styled.div`
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-right: 10px;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: #444;
  text-transform: uppercase;
  font-weight: 700;
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
  border: 1px solid red;

  & :hover {
    color: red;
  }

  padding-bottom: 10px;
  padding-top: 10px;
`;
