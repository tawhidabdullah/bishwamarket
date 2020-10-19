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
        breakpoint: 1524,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        customStyles={{}}
      />
    </Section>
  );
};
export default ProductByCategory;

const Section = styled.div``;
