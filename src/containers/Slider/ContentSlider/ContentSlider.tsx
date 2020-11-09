import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";

import styled from "styled-components";

// import utils
import { addFilterToStorage } from "../../../utils";

// import hooks
import { useQueryFetch } from "../../../hooks";

const ContentSlider = () => {
  const tagList = useQueryFetch("tagList");
  const [activeSlide, setactiveSlide] = useState(0);
  const [activeSlide2, setactiveSlide2] = useState(0);
  const history = useHistory();

  const settings = {
    // dots: false,
    // infinite: true,
    speed: 500,

    beforeChange: (current, next) => setactiveSlide(next),
    afterChange: (current) => setactiveSlide2(current),
    responsive: [
      {
        breakpoint: 2924,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1724,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      {tagList.isSuccess && tagList.data?.length > 0 && (
        <>
          <Maxconatiner>
            <Main>
              <MainContent>
                <Slider {...settings}>
                  {tagList.data.map((tag) => (
                    <Button
                      onClick={() =>
                        addFilterToStorage({ tag: tag.id }, () => {
                          history.push("/product");
                        })
                      }
                    >
                      {tag.name}
                    </Button>
                  ))}
                </Slider>
              </MainContent>
            </Main>
          </Maxconatiner>
        </>
      )}
    </>
  );
};

export default ContentSlider;
const Maxconatiner = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
`;
const Main = styled.div`
  /* max-width: 1500px; */
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 580px) {
    padding-right: 2px;
    padding-left: 2px;
  }
`;
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
`;

const Button = styled.div`
  font-size: 16px;
  background: #fff;
  outline: none;
  cursor: pointer;
  min-width: 150px;
  padding: 30px 7px;
  margin: 1rem 0px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-align: center;

  @media only screen and (max-width: 900px) {
    padding: 20px 0px;
  }
  @media only screen and (min-width: 1724px) {
    min-width: 200px;
  }

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
    left: -100%;
    bottom: 100%;
    transition: all 0.35s;
  }
`;
