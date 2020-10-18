import React, { useState } from "react";
import Slider from "react-slick";
import img from "../../../assets/banner/1.jpg";
import fimg1 from "../../../assets/slider-tab/1.jpg";
import bimg1 from "../../../assets/slider-tab/a1.jpg";

import styled from "styled-components";
import { ProductsByCategory } from "../../../components/Slider/ProductsByCategory";
import {MainSlider} from "../../../components/Slider/MainSlider"
import {Blog} from "../../../components/Banner/Blog"

const SpecilaProductSlider=()=> {

   const responsive = {
  
     responsive: [
       {
         breakpoint: 1524,
         settings: {
           slidesToShow: 4,
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
   return (
     <Section>
       <Blog
         title="special Products"
         customStyles={{
           height: "100px",
           backgroundColor: "#fff",
         }}
       />

       <MainSlider
         responsive={responsive}
         ProductsByCategory={ProductsByCategory}
       />
     </Section>
   );
}
export default SpecilaProductSlider;




const Section = styled.div`
 
`;


