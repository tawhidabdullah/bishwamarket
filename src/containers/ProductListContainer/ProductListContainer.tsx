    //@ts-nocheck
import React from 'react'
import styled from "styled-components"
import { LeftBar } from "../../components/ProductListing/LeftBar";
import { RightBar } from "../../components/ProductListing/RightBar";
import { SearchContain } from "../../components/Search/SearchContain/";
const ProductListContainer = ({ products }) => {
  return (
    <Main>
      <SearchContain title={"CATEGORY"} />
      <Section>
        <LeftBar />
    
        <RightBar products={products} />
      </Section>
    </Main>
  );
};

export default ProductListContainer;

const Section = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 3fr;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    width: 100%;
  }

 
`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
`;