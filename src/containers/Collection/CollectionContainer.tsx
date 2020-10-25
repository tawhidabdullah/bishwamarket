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

  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  max-width: 1400px;
  margin: 0 auto;
  margin-right:10px;
  margin-left:10px;
`;

const Section = styled.div`

`;