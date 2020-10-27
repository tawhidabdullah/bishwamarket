import React from 'react'
import styled from "styled-components";
import { SearchContain } from "../../components/Search/SearchContain";
import { CollectionByCategory } from "../../components/Collection";
const CollectionContainer = () => {
  return (
    <Section>
      <SearchContain title={"Collection"} />
      <Main>
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />
        <CollectionByCategory />

        <CollectionByCategory />
      </Main>
    </Section>
  );
};


export default CollectionContainer;
const Main = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0px auto;
  grid-gap: 20px;
  padding: 30px 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const Section = styled.div`
display:gtid;
justify-items:center;
align-items:center;

`;