import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";
import { MediaBanner } from "../../../components/Slider/MediaBanner";

import styled from "styled-components";

const MediaBannerSlider = () => {
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
        breakpoint: 3224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
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
    </Main>
  );
};

export default MediaBannerSlider;
const Main = styled.div`
  background-color: #fff;

  padding: 70px;

  @media only screen and (max-width: 600px) {
    padding: 20px 10px;
  }
`;
const MainContent = styled.div`
  outline: none;

  background-color: #f2f2f2;

  & .slick-slide {
    outline: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-right: 1px solid #ddd;
    padding: 30px;
  }
`;
