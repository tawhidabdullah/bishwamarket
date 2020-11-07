import React from "react";
import styled from "styled-components";

// import styles
import { DropdownContainerStyles, DropdownItemStyles } from "./commonStyles";

const Homedropdown = (props) => {
  return (
    <>
      <HomeDropdownContainer>
        <HomeDropdownItem>Layout 1</HomeDropdownItem>
        <HomeDropdownItem>Layout 2</HomeDropdownItem>
        <HomeDropdownItem>Layout 3</HomeDropdownItem>
        <HomeDropdownItem>Layout 4</HomeDropdownItem>
        <HomeDropdownItem>Layout 5</HomeDropdownItem>
        <HomeDropdownItem>Layout 6</HomeDropdownItem>
      </HomeDropdownContainer>
    </>
  );
};

export default Homedropdown;

const HomeDropdownContainer = styled.ul`
  ${DropdownContainerStyles}
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 10px;

`;

const HomeDropdownItem = styled.li`
  ${DropdownItemStyles}
`;
