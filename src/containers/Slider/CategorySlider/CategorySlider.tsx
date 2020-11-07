

  //@ts-nocheck
import React from "react";

import styled from "styled-components";
import { MainSlider } from "../../../components/Slider/MainSlider";
import { DealBanner } from "../../../components/Banner/DealBanner";
import { CategoryItem } from "../../../components/Slider/CategoryItem";
import {useSelector} from "react-redux"
const CategorySlider = () => {
      let category = useSelector((state) => state.category);
      console.log(category, "categorycategory");
  const responsive = {
    responsive: [
      {
        breakpoint: 3224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
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
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },

      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },

      // {
      //   breakpoint: 300,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: false,
      //     arrows: false,
      //   },
      // },
    ],



  };
  return (
    <Section>
      <DealBanner />

      <MainSlider
        responsive={responsive}
        ProductsByCategory={CategoryItem}
        data={category}
        customStyles={{
          backgroundColor: "#ffa800",

          padding: "30px  70px 20px",
        }}
      />
    </Section>
  );
};
export default CategorySlider;

const Section = styled.div``;
