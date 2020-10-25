import React from 'react'
import styled from "styled-components"
import { SearchContain } from "../../components/Search/SearchContain/";
import { SearchField } from "../../components/Search/SearchField";
import { ProductsByCategory } from "../../components/Slider/ProductsByCategory";
 const SearchContainer = () => {
   return (
     <Section>
       <SearchContain />
       <SearchField />

       <Main>
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />
         <ProductsByCategory
           customStyles={{
             productBackgroundColor: "#fff",
             Levelvisibility: "hidden",
             ProductDetailVisibility: "hidden",
             containerDirection: "row",
             containerright: "10%",
             containerTransform: "translateY(100%)",
             containertop: "80%",
           }}
         />

       </Main>
     </Section>
   );
 };


export default SearchContainer;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(240, auto);

  max-width: 1400px;
  margin: 0 auto;
  justify-items: center;

  margin-left: 10px;
  margin-right: 20px;

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 980px) and (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  @media only screen and (max-width: 630px) and (min-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (max-width: 1200px) and (min-width: 980px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Section = styled.div``;
