import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";

import styled from "styled-components";

const MainSlider=({responsive,ProductsByCategory,...props})=> {


 const [activeSlide, setactiveSlide] = useState(0);
   const [activeSlide2, setactiveSlide2] = useState(0);
   const settings = {
     dots: false,
     infinite: true,
     speed: 500,

     beforeChange: (current, next) => setactiveSlide(next),
     afterChange: (current) => setactiveSlide2(current),
     responsive: responsive.responsive,
   };
    return (
      <MainContent>
        <Slider {...settings}>
          <ProductsByCategory />
          <ProductsByCategory />
          <ProductsByCategory />
          <ProductsByCategory />
          <ProductsByCategory />
        </Slider>
      </MainContent>
    );
}


export default MainSlider;

const MainContent = styled.div`
  outline: none;
  border: none;
  background-color: #f2f2f2;


  & .slick-slide {
    outline: none;
    border: none;
    display: flex;
    justify-content: start;
    align-items: start;
    border:1px solid green;
  }

  
`;