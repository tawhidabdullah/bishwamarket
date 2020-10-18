import React, { useState } from "react";
import styled from "styled-components";

import { MainSlider } from "../../components/Slider/MainSlider";
import { Blog } from "../../components/Banner/Blog";
import { MediaBanner } from "../../components/Slider/MediaBanner";
import Slider from "react-slick";

const CollectionMediaBanner = () => {
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
          slidesToShow: 1,
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

   const settings2 = {
     // dots: false,
     // infinite: true,
     speed: 500,

     beforeChange: (current, next) => setactiveSlide(next),
     afterChange: (current) => setactiveSlide2(current),
     responsive: [
       {
         breakpoint: 1524,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: false,
           arrows: true,
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
    <Main>
      {" "}
      <MainContent>
        <Slider {...settings}>
          <MediaBanner />
          <MediaBanner />
          <MediaBanner />

          <MediaBanner />
          <MediaBanner />
        </Slider>
      </MainContent>
      <MidContent>game show done</MidContent>
      <MainContents>
        <Slider {...settings2}>
          <MediaBanner />
          <MediaBanner />
          <MediaBanner />

          <MediaBanner />
          <MediaBanner />
        </Slider>
      </MainContents>
    </Main>
  );
};
export default CollectionMediaBanner;

const MainContents = styled.div`
  outline: none;
  background-color: #f2f2f2;
  padding: 30px;

  display: grid;
  grid-template-columns: minmax(140px, 520px);
  & .slick-prev {
    top: 35px;
    right: 50px;
    left: unset;
    z-index: 9;
  }
  & .slick-next {
    top: 35px;
    right: 25px;
    z-index: 9;
    background: transparent;
    width: 20px;
    height: 20px;
  }
  & .slick-prev::before {
    color: #999;
    opacity: 1;
    font: normal normal normal 30px/1 FontAwesome;
    content: "\f104";
  }

  .slick-next::before {
    color: #999;
    opacity: 1;
    content: "\f105";
    font: normal normal normal 30px/1 FontAwesome;
  }
`;

const Main = styled.div`
  background-color: #fff;
  display: flex;
  justify-content:center;
  padding: 70px;

`;
const MainContent = styled.div`
  outline: none;
  padding: 30px;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: minmax(140px, 240px);
`;


const MidContent = styled.div`
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: minmax(140px, 200px);



`;