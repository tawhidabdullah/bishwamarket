import React from "react";



import styled from "styled-components";
import { ProductsByCategory } from "../../../components/Slider/ProductsByCategory";
import {MainSlider} from "../../../components/Slider/MainSlider"
import {Blog} from "../../../components/Banner/Blog"

const SpecilaProductSlider=()=> {

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
         breakpoint: 1154,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           infinite: true,
           dots: false,
           arrows: false,
         },
       },
       {
         breakpoint: 970,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 2,
           initialSlide: 2,
           infinite: true,
           dots: false,
           arrows: false,
         },
       },
       {
         breakpoint: 580,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: false,
           arrows: false,
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
         customStyles={{
           productBackgroundColor: "f2f2f2",
           Levelvisibility: "visible",
         }}
       />
     </Section>
   );
}
export default SpecilaProductSlider;




const Section = styled.div`
 
`;


