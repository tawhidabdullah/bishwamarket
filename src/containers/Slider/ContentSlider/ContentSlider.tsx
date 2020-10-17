import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";

import styled from "styled-components";

const ContentSlider = () => {
  const [activeSlide, setactiveSlide] = useState(0);
  const [activeSlide2, setactiveSlide2] = useState(0);
  const settings = {
    // dots: false,
    // infinite: true,
    speed: 500,

    beforeChange: (current, next) => setactiveSlide(next),
    afterChange: (current) => setactiveSlide2(current),
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
        <Button>80% OFF</Button>
        <Button>On SALE</Button>
        <Button>ONLY 49$</Button>
        <Button>UUNDER @150</Button>
        <Button>SAVE MONEY</Button>
        <Button>FREE SHIPPING</Button>
        <Button>EXTRA 10% OFF</Button>
        <Button>10% OFF</Button>
      </Slider>
    </MainContent>
  );
};

export default ContentSlider;
const MainContent = styled.div`
  outline: none;
  border: none;
  background-color: #f2f2f2;
  margin:0px 20px 0px 20px;

  & .slick-slide {
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Button = styled.div`
  font-size: 16px;
  background: #fff;
  outline: none;
  min-width:140px;
  padding: 30px 7px;
  margin: 1rem 0px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-align:center;

  &:hover {
    color: #fff;
  }
  &::after {
    content: "";
    background: #f12424;
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
  }

  &:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
  }

  &::after {
    left: 0;
    right: 0;
    top: -100%;
    bottom: 100%;
    transition: all 0.35s;
  }
`;







