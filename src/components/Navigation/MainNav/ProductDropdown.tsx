import React from "react";
import styled from "styled-components";

import { DropdownContainerStyles, DropdownItem, Header } from "./commonStyles";

// import dummy image
import productDropdownImg1 from "../../../assets/menu-banner1.jpg";
import productDropdownImg2 from "../../../assets/menu-banner2.jpg";

const ProductDropdown = () => {
  return (
    <ProductDropdownContainer>
      <ListItemContainer>
        <ProductDropdownItemContainer>
          <Header>Side bar</Header>
          <DropdownItem>Left Sidebar</DropdownItem>
          <DropdownItem>Right Sidebar</DropdownItem>
          <DropdownItem>No Sidebar</DropdownItem>
        </ProductDropdownItemContainer>

        <ProductDropdownItemContainer>
          <Header>Bonus Layout</Header>
          <DropdownItem>Bundle</DropdownItem>
          <DropdownItem>Image Swatch</DropdownItem>
          <DropdownItem>Vertical Tab</DropdownItem>
        </ProductDropdownItemContainer>

        <ProductDropdownItemContainer>
          <Header>
            {" "}
            Product Layout <span>NEW</span>
          </Header>
          <DropdownItem>4 Image</DropdownItem>
          <DropdownItem>Sticky</DropdownItem>
          <DropdownItem>Accordian</DropdownItem>
        </ProductDropdownItemContainer>

        <ProductDropdownItemContainer>
          <Header>Thumbnail Image</Header>
          <DropdownItem>Left Image</DropdownItem>
          <DropdownItem>Right Image</DropdownItem>
          <DropdownItem>Image Outside</DropdownItem>
        </ProductDropdownItemContainer>

        <ProductDropdownItemContainer>
          <Header>3 Column</Header>
          <DropdownItem>Thumbnail Left</DropdownItem>
          <DropdownItem>Thumbnail Right</DropdownItem>
          <DropdownItem>Thumbnail Bottom</DropdownItem>
        </ProductDropdownItemContainer>

        <ProductDropdownItemContainer>
          <Header>Product Element</Header>
          <DropdownItem>Product Box</DropdownItem>
          <DropdownItem>Product Slider</DropdownItem>
          <DropdownItem>No Slider</DropdownItem>
        </ProductDropdownItemContainer>
      </ListItemContainer>

      <ProductDropdownBannerContainer>
        <ProductDropdownBanner>
          <img src={productDropdownImg1} alt="" />
        </ProductDropdownBanner>

        <ProductDropdownBanner>
          <img src={productDropdownImg2} alt="" />
        </ProductDropdownBanner>
      </ProductDropdownBannerContainer>
    </ProductDropdownContainer>
  );
};

export default ProductDropdown;

const ProductDropdownBannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 20px;
  align-items: center;
  column-gap: 30px;
`;

const ProductDropdownBanner = styled.div`
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ProductDropdownContainer = styled.div`
  ${DropdownContainerStyles}
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 83vw;
  margin-top: 10px;
  padding: 10px;
  cursor: context-menu;
`;

const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column: 30px;
`;

const ProductDropdownItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  /* align-items: center; */
`;
