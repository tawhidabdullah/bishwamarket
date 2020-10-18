import React,{useState} from 'react'
import {Blog } from "../../components/Banner/Blog"
import { MainSlider } from "../../components/Slider/MainSlider";
import styled from "styled-components";

import {BlogItem} from "../../components/Slider/BlogItem"

const LatestBlog=()=> {
    const responsive = {
  
     responsive: [
       {
         breakpoint: 1524,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 2,
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
  return (
    <Section>
      <Blog
        title="Latest Blog"
        customStyles={{
          height: "100px",
          backgroundColor: "#f2f2f2",
        }}
      />
      <BottomSection>
        <MainSlider responsive={responsive} ProductsByCategory={BlogItem} />
      </BottomSection>
    </Section>
  );
}
export default LatestBlog;
const Section = styled.div``;
const BottomSection = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
