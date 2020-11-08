//@ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import common elements
import { Header } from "../../elements/Header";
import { FilterCheckbox } from "../../common/FilterCheckbox";

// styles
const headerStyles = {
  "font-weight": 600,
  "font-size": "18px",
};

const inputStyles = {
  label: {
    padding: 0,
    "font-size": "13px",
    margin: 0,
  },
};

const FilterBox = ({ opts, header, handleFilterProduct, ids }) => {
  console.log("header", header);
  return (
    <FilterBoxContainer>
      {opts && opts.length > 0 && (
        <Header content={header} customStyle={headerStyles} />
      )}

      {opts &&
        opts.map((opt) => (
          <FilterCheckbox
            key={opt.id}
            label={opt.name}
            value={{ id: opt.id, header }}
            subCategory={opt.subCategory}
            ids={ids}
            handleChange={handleFilterProduct}
            header={header}
            customStyle={{ ...inputStyles }}
          />
        ))}
    </FilterBoxContainer>
  );
};

export default FilterBox;

const FilterBoxContainer = styled.div`
  padding: 20px;
  margin-bottom: 40px;
`;
