import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";

import styled from "styled-components";
import {ProductsByCategory} from "../../../components/Slider/ProductsByCategory"
const SimpleSlide = () => {
  const [activeSlide, setactiveSlide] = useState(0);
  const [activeSlide2, setactiveSlide2] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    beforeChange: (current, next) => setactiveSlide(next),
    afterChange: (current) => setactiveSlide2(current),
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
    <MainContent>
      <Slider {...settings}>
        <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>


         <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>

        <ProductsByCategory></ProductsByCategory>

       
      </Slider>
    </MainContent>
  );
};

export default SimpleSlide;
const MainContent = styled.div`
  outline: none;
  border: none;
  background-color: #f2f2f2;

  & .slick-slide {
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .productBox {
  }
`;


