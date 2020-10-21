import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";

import styled from "styled-components";

const MainSlider=({responsive,ProductsByCategory,customStyles,...props})=> {


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
      <MainContent customStyles={customStyles}>
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
  background-color: ${(props) =>
    props.customStyles ? props.customStyles.backgroundColor : "#f2f2f2"};

  display: grid;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: ${(props) => (props.customStyles ? props.customStyles.padding : "")};
  grid-template-columns: minmax(140px, auto);

  width: 100%;

  & .slick-slide {
    outline: none;
    border: none;
    display: flex;
    justify-content: start;
    align-items: start;

    width: 100%;
  }

  & div {
    width: ${(props) => (props.customStyles ? props.customStyles.width : "")};
  }
`;