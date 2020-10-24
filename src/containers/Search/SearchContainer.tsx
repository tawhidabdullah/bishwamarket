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
  grid-gap: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Section = styled.div``;
