import React from 'react'
import styled from "styled-components"
import { ProductsByCategory } from "../../components/Slider/ProductsByCategory/";
const Search=()=> {
    return (
      <Section>
         <Breadcrumbmain>
           <Contain>
             <h2>search</h2>
             <List>
               <li>
                 <a href="#">home</a>
              </li>
               <li>
              <i className="fa fa-angle-double-right"></i>
               </li>
              <li>
                 <a href="#">search</a>
               </li>
             </List>
           </Contain>
        </Breadcrumbmain>

      <InputBox>
        <input
          type="text"

          aria-label="Amount (to the nearest dollar)"
          placeholder="Search Products......"
        />

          <button className="btn btn-normal">
           <i className="fa fa-search"></i>Search
          </button>

      </InputBox>
      <Main>
        <ProductsByCategory  />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
        <ProductsByCategory />
      </Main>

      </Section>
    );
}


export default Search;


const Main =styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-auto-rows:minmax(240,auto);
grid-gap:10px;
justify-content:center;
`;

const Breadcrumbmain=styled.div`
padding:50px 0px;
display:flex;
justify-content:center;
align-items:center;
background-color:#fff;
`;

const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    color: #333;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: calc(20px + (28 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  & li {
    list-style-type: none;
    margin-right: 15px;
  }
`;


//input box


const InputBox = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    border-radius: 0 5px 5px 0;
    padding: 15px 20px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;

    border: 1px solid blue;
    outline: none;
  }

  & button {
    padding: 15px 20px;
    margin-left: -2px;
    width:fit-content;
    background-color: #00baf2;
    outline:none;
    color:#fff;
   & i{
     padding-right:12px;
 }
  }
`;

const Section=styled.div``;