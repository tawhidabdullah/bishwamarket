import React from "react";
import styled from "styled-components";

// import styles
import { DropdownContainerStyles, DropdownItemStyles } from "./commonStyles";

const NestedDropDown = ({ lists, customStyle }) => {
  return (
    <NestedDropdownContainer customStyle={customStyle}>
      {lists &&
        lists.map((list, idx) => (
          <NestedDropdownItem key={idx}>{list}</NestedDropdownItem>
        ))}
    </NestedDropdownContainer>
  );
};

export default NestedDropDown;

const NestedDropdownContainer = styled.div`
  ${DropdownContainerStyles}
  transform: translateX(48%);
  top: 40px;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 10px;
  visibility: hidden !important;
  opacity: 0;

  ${(props) => props.customStyle}
`;

const NestedDropdownItem = styled.span`
  ${DropdownItemStyles}
`;
