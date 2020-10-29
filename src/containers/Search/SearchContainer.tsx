import React,{useEffect,useRef} from 'react'
import styled from "styled-components"
import { SearchContain } from "../../components/Search/SearchContain/";
import { SearchField } from "../../components/Search/SearchField";
import { ProductsByCategory } from "../../components/Slider/ProductsByCategory";



 const SearchContainer = () => {

   return (
     <Section>
       <SearchContain title={"search"} />
       <SearchField />
       <SearchProduct>
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
               page: "search",
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
               page: "search",
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
               page: "search",
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
               page: "search",
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
               page: "search",
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
               page: "search",
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
               page: "search",
             }}
           />
         </Main>
       </SearchProduct>
     </Section>
   );
 };






const SearchProduct = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-auto-rows: minmax(240px, auto); */

  justify-items: center;

  margin-left: 10px;
  margin-right: 20px;
  grid-gap: 10px;
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
  @media only screen and (max-width: 980px) and (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 630px) and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 1200px) and (min-width: 980px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 1500px) and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Section = styled.div``;




export default SearchContainer;