import React from "react";
import styled from "styled-components";
import { SearchContain } from "../../components/Search/SearchContain";
import { CollectionByCategory } from "../../components/Collection";

import { useSelector } from "react-redux";
const CollectionContainer = () => {
  let category = useSelector((state) => state.category);

  return (
    <Section>
      <SearchContain title={"Collection"} />
      <Main>
        {category.map((item, idx) => {
          return <CollectionByCategory key={idx} item={item} />;
        })}
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
  display: gtid;
  justify-items: center;
  align-items: center;
`;
