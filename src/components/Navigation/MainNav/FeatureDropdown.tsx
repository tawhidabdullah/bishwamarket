import React from "react";
import styled from "styled-components";

import { DropdownContainerStyles, DropdownItem, Header } from "./commonStyles";

// import dummy image
import featureDropdownBanner from "../../../assets/mega-banner.jpg";

const FeatureDropdown = () => {
  return (
    <FeatureDropdownContainer>
      <ListItemContainer>
        <FeatureDropdownItemContainer>
          <Header>Portfolio</Header>
          <DropdownItem>Portfolio Grid 2</DropdownItem>
          <DropdownItem>Portfolio Grid 3</DropdownItem>
          <DropdownItem>Portfolio Grid 4</DropdownItem>
          <DropdownItem>Portfolio Grid 6</DropdownItem>
          <DropdownItem>Mesonary Grid 2</DropdownItem>
          <DropdownItem>Mesonary Grid 4</DropdownItem>
          <DropdownItem>Mesonary Grid 6</DropdownItem>
          <DropdownItem>Mesonary Full Width </DropdownItem>
        </FeatureDropdownItemContainer>

        <FeatureDropdownItemContainer>
          <Header>Add To Cart</Header>
          <DropdownItem>Cart Modal Popup</DropdownItem>
          <DropdownItem>Qty. Counter</DropdownItem>
          <DropdownItem>Cart Left</DropdownItem>
          <DropdownItem>Cart Right</DropdownItem>
          <DropdownItem>Cart Top</DropdownItem>
          <DropdownItem>Cart Bottom</DropdownItem>
        </FeatureDropdownItemContainer>

        <FeatureDropdownItemContainer>
          <Header>Shortcodes</Header>
          <DropdownItem>Title</DropdownItem>
          <DropdownItem>Collection Banner</DropdownItem>
          <DropdownItem>Home Slider</DropdownItem>
          <DropdownItem>Category</DropdownItem>
          <DropdownItem>Service</DropdownItem>
          <DropdownItem>Image Size Ratio</DropdownItem>
          <DropdownItem>Tab</DropdownItem>
        </FeatureDropdownItemContainer>

        <FeatureDropdownItemContainer>
          <Header>Email Template</Header>
          <DropdownItem>Order Success</DropdownItem>
          <DropdownItem>Order Success 2</DropdownItem>
          <DropdownItem>Email Template</DropdownItem>
          <DropdownItem>Email Template 2</DropdownItem>
          <Header customStyle={{ "margin-top": "15px" }}>Easy to Use</Header>
          <DropdownItem>Element Button</DropdownItem>
          <DropdownItem>Element Instagram</DropdownItem>
        </FeatureDropdownItemContainer>

        <FeatureDropdownItemContainer>
          <img src={featureDropdownBanner} alt="" />
        </FeatureDropdownItemContainer>
      </ListItemContainer>
    </FeatureDropdownContainer>
  );
};

export default FeatureDropdown;

const FeatureDropdownContainer = styled.div`
  ${DropdownContainerStyles}
  /* justify-content: space-between; */
  /* align-items: center; */
  transform: translateX(-62%);
  width: 85vw;
  /* margin: 0 auto; */
  margin-top: 10px;
  padding: 10px;
  cursor: context-menu;
`;

const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: 30px;
`;

const FeatureDropdownItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  /* align-items: center; */
`;
