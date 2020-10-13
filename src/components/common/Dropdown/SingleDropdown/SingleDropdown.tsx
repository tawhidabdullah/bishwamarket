import React from "react";
import styled from "styled-components";

// import element component
import { ListItem } from "../../../elements/ListItem";

const SingleDropDown = ({ listItem, customeStyles }) => {
  return (
    <SingleDropDownContainer customStyles={customeStyles}>
      {listItem.map((list, idx) => (
        <ListItem key={idx} content={list} padding="5px 10px" />
      ))}
    </SingleDropDownContainer>
  );
};

export default SingleDropDown;

const SingleDropDownContainer = styled.div`
  transition: max-height 1s;
  max-height: 0;
  z-index: 1;
  transition: max-height 1s;
  ${(props) => props.customStyles};
`;
