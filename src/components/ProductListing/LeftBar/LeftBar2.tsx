//@ts-nocheck
import React from "react";
import styled from "styled-components";

// import components
import FilterBox from "./FilterBox";

const LeftBar = ({ ids, handleFilterProduct, filterLabels }) => {
  return (
    <LeftContent>
      {Object.keys(filterLabels).map((filterType, idx) => (
        <FilterBox
          key={idx}
          header={filterType}
          opts={filterLabels[filterType]}
          handleFilterProduct={handleFilterProduct}
          ids={ids}
        />
      ))}
    </LeftContent>
  );
};

export default LeftBar;

const LeftContent = styled.div`
  background-color: #fff;

  padding: 10px 20px;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: minmax(200px, 1fr);
  height: fit-content;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
