import React from "react";
import styled from "styled-components";

import { DropdownItemStyles, DropdownContainerStyles } from "./commonStyles";

const ShopDropdown = () => {
  return (
    <ShopDropdownContainer>
      <ShopDropdownItem>Left Sidebar</ShopDropdownItem>
      <ShopDropdownItem>Right Sidebar</ShopDropdownItem>
      <ShopDropdownItem>No Sidebar</ShopDropdownItem>
      <ShopDropdownItem>Sidebar popup</ShopDropdownItem>
      <ShopDropdownItem>
        Metro <span>new</span>
      </ShopDropdownItem>
      <ShopDropdownItem>
        Full width <span>new</span>
      </ShopDropdownItem>
      <ShopDropdownItem>Infinite Scroll</ShopDropdownItem>
      <ShopDropdownItem>3 Grid</ShopDropdownItem>
      <ShopDropdownItem>6 Grid</ShopDropdownItem>
      <ShopDropdownItem>List View</ShopDropdownItem>
    </ShopDropdownContainer>
  );
};

export default ShopDropdown;

const ShopDropdownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  ${DropdownContainerStyles}

  width: 200px;
  padding: 20px 10px;
`;

const ShopDropdownItem = styled.li`
  ${DropdownItemStyles}
`;
