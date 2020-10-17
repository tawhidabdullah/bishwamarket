import React from 'react'
import styled from "styled-components";

import collection3 from "../../../assets/collection/3.jpg"
import CollectionItem from "../../CollectionItem/CollectionItem"
const Collection=()=> {
    return (
      <Section>
        <CollectionItem
          customStyles={{
          
          }}
        ></CollectionItem>
        <CollectionItem
          customStyles={{
            
          }}
        ></CollectionItem>
        <CollectionItem
          customStyles={{
            
          }}
        ></CollectionItem>
      </Section>
    );
}

export default Collection;

const Section = styled.div`

  display: grid;
  grid-template-columns: 2fr 2fr 2fr;

  grid-auto-rows: minmax(170px, auto);

  background-color:gray;
`;



const Image = styled.div`
 
`;