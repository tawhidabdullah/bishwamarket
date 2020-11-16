//@ts-nocheck
import React from "react";

import styled from "styled-components";
import { MainSlider } from "../../../components/Slider/MainSlider";
import { DealBanner } from "../../../components/Banner/DealBanner";
import { CategoryItem } from "../../../components/Slider/CategoryItem";
import { useSelector } from "react-redux";
const CategorySlider = () => {
  let category = useSelector((state) => state.category);
  const responsive = {
    responsive: [
      {
        breakpoint: 3224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },

      // {
      //   breakpoint: 300,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //     arrows: false,
      //   },
      // },
    ],
  };
  return (
    <Section className="categorySlider">
      {/* <DealBanner /> */}

      <MainSlider
        responsive={responsive}
        ProductsByCategory={CategoryItem}
        data={category}
        customStyles={{
          backgroundColor: "#ff6000",
          padding: "30px  50px 20px",
          
        }}
      />
    </Section>
  );
};
export default CategorySlider;

const Section = styled.div``;
