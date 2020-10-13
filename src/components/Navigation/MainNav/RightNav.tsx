import React from "react";
import styled from "styled-components";

// import common component
import { ItemText } from "../../common/ItemText";

const RightNav = ({ customStyles, openSigninDrawer, openWishListDrawer }) => {
  return (
    <NavItemContainer>
      <ToggleContainer>
        <ItemText customStyles={customStyles} isIcon={true}>
          HOME
        </ItemText>
        <ItemText customStyles={customStyles} isIcon={true}>
          SHOP
        </ItemText>
        <ItemText customStyles={customStyles} isIcon={true}>
          PRODUCTS
        </ItemText>
        <ItemText customStyles={customStyles} isIcon={true}>
          FEATURE
        </ItemText>
        <ItemText customStyles={customStyles} isIcon={true}>
          PAGES
        </ItemText>
        <ItemText customStyles={customStyles} isIcon={true}>
          BLOG
        </ItemText>
      </ToggleContainer>
      <IconContainer>
        <IconWrapper onClick={openSigninDrawer}>
          <i className="fa fa-user"></i>
        </IconWrapper>
        <WishBox onClick={openWishListDrawer}>
          <span>
            <i className="fa fa-heart"></i>
          </span>

          <WishText>
            <span>5 ITEM</span>
            <span>WISHLIST</span>
          </WishText>
        </WishBox>
        <CartIcon>
          <span>0</span>
          <i className="fa fa-shopping-cart"></i>
        </CartIcon>
      </IconContainer>
    </NavItemContainer>
  );
};

export default RightNav;

const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: PT-Sans, sans-serif;
  font-weight: bold;
`;

const ToggleContainer = styled.div``;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
`;
const IconWrapper = styled.span`
  padding: 0 10px;
  cursor: pointer;
`;

const WishBox = styled(IconWrapper)`
  display: flex;
  font-size: 13px;
  align-items: center;

  & span:first-child {
    padding-right: 10px;
  }
`;

const WishText = styled.div`
  display: flex;
  flex-direction: column;

  & span:first-child {
    color: #ff6000;
  }
`;

const CartIcon = styled(IconWrapper)`
  background-color: #ff6000;
  padding: 15px 20px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  color: white;
  font-size: 24px;
`;
