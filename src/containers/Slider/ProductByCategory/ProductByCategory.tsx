import React from "react";

import styled from "styled-components";
import { ProductsByCategory } from "../../../components/Slider/ProductsByCategory";
import { MainSlider } from "../../../components/Slider/MainSlider";
import { Blog } from "../../../components/Banner/Blog";
import {Productcontain} from "../../../components/Navigation/ProductConatain"
const ProductByCategory = () => {
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
        breakpoint: 580,
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
  return (
    <Section>
      <Productcontain />

      <MainSlider
        responsive={responsive}
        ProductsByCategory={ProductsByCategory}
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
