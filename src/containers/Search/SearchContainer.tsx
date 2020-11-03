import React,{useEffect,useState,useRef} from 'react'
import styled from "styled-components"
import { SearchContain } from "../../components/Search/SearchContain/";
import { SearchField } from "../../components/Search/SearchField";
import { ProductsByCategory } from "../../components/Slider/ProductsByCategory";



 const SearchContainer = ({ products }) => {
   const productCardStyles = {
     productBackgroundColor: "#fff",
     Levelvisibility: "hidden",
     ProductDetailVisibility: "hidden",
     containerDirection: "row",
     containerright: "10%",
     containerTransform: "translateY(100%)",
     containertop: "80%",
     page: "search",
   };

   const [key,setkey]=useState("");
   const [searchproduct, setproduct] = useState(products);
   const handle=(e)=>{
    
  
   
    const result = products.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(result.length, "pp");
    console.log(products.length, "ppp");
    setproduct(result);
    
   }
   return (
     <Section>
       <SearchContain title={"search"} />

       <InputBox>
         <input
           type="text"
           aria-label="Amount (to the nearest dollar)"
           placeholder="Search Products......"
           onChange={(e) => handle(e)}
         />

         <button className="btn btn-normal">
           <i className="fa fa-search"></i>Search
         </button>
       </InputBox>
       <SearchProduct>
         <Main>
           {searchproduct.map((item) => {
             return (
               <ProductsByCategory
                 customStyles={productCardStyles}
                 item={item}
               />
             );
           })}
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

const InputBox = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    border-radius: 0 5px 5px 0;
    padding: 13px 20px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;

    border: 1px solid #ced4da;
    outline: none;
    width: 400px;
    @media screen and (max-width: 580px) {
      max-width: 60%;
    }
  }

  & button {
    padding: 13px 20px;
    margin-left: -2px;
    width: fit-content;
    background-color: #00baf2;
    outline: none;
    color: #fff;
    & i {
      padding-right: 12px;
    }

    &:hover {
      background-color: black;
      color: #fff;
      outline: none;
    }

    @media screen and (max-width: 580px) {
      padding: 13px 10px;
    }
  }
`;


export default SearchContainer;


