
import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";

import styled from "styled-components";

import {CategoryItem} from "../../../components/Slider/CategoryItem"
const CategorySlider=()=> {
  
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
          slidesToShow: 5,
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
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem /> 
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Slider>
    </MainContent>
  );
};


export default CategorySlider;
const MainContent = styled.div`
  outline: none;
  border: none;
  background-color: #ffa800;
  padding: 50px 0 40px;

  & .slick-slide {
    outline: none;
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &:hover{

    }
  }
`;