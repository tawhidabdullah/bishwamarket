import React, { useState } from "react";
import styled from "styled-components";

import { MainSlider } from "../../components/Slider/MainSlider";
import { Blog } from "../../components/Banner/Blog";
import { HotdealItem } from "../../components/HotdealItem";
import {MediaBanner} from "../../components/Slider/MediaBanner"
import Slider from "react-slick";
import img1 from "../../assets/hotDeal/1.jpg"
import img from "../../assets/6.jpg"
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
      <MidContent>
        <Jewellerybanner style={{ backgroundImage: `url(${img})` }}>
          <a>save 30% off</a>
          <h6>Jewellery</h6>
        </Jewellerybanner>
      </MidContent>
      <MainContents>
        <Slider {...settings2}>
          <HotdealItem />
          <HotdealItem />
        </Slider>
      </MainContents>
    </Main>
  );
};
export default CollectionMediaBanner;

const MainContents = styled.div`
  outline: none;
  background-color: #f2f2f2;
  padding: 10px;

  display: grid;
  grid-template-columns: minmax(140px, 620px);
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
  padding: 30px;

`;
const MainContent = styled.div`
  outline: none;
  padding: 30px;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: minmax(140px, 200px);
`;


const MidContent = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: minmax(140px, 100px);



`;

const Jewellerybanner = styled.div`

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 35px;
  height: 100%;
`;



const HotDealContainer = styled.div`
  background-color: #f2f2f2;

`;

const HotContain=styled.div`
display:grid;
grid-template-columns:1fr 3fr 1fr;

`;

const HotdealCenter = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: start;
  justify-content: start;
  height: 100%;

  
`;

const HotRating = styled.div`
  line-height: 1;
  margin: 20px 10px;
  color: #ffa800;
`;
const Timer = styled.div`
  & p {
    line-height: 1.6;
    margin: 20px 10px;
    letter-spacing: 0.05em;
  }

  & span {
    display: inline-grid;
    background-color: transparent;
    text-align: center;
    font-weight: 700;
    color: #000;
    margin: 0 4px;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
    padding: 0;
  }
  & h5 {
    color: #444;
    text-transform: capitalize;
    letter-spacing: 0.05em;

    font-weight: 700;
    margin-bottom: 0;
    font-size: 16px;
  }
`;
const PriceBox = styled.div`
  line-height: 1.6;
  margin: 20px 10px;
  letter-spacing: 0.05em;
`;

const Price = styled.div`
  & p {
    margin: 20px 10px;
  }

  & span {
    font-size: 16px;
    color: #5a514b !important;
    font-weight: 700;
    margin-right: 10px;
    line-height: 1;
  }
`;

const Text = styled.div`
  color: #444;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  margin: 20px 10px;
`;
