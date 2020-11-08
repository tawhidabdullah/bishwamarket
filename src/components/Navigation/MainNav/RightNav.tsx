import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import global actions
import { globalOperations } from "../../../state/ducks/globalState";

import HomeDropdown from "./HomeDropdown";
import ShopDropdown from "./ShopDropdown";
import ProductDropdown from "./ProductDropdown";
import FeatureDropdown from "./FeatureDropdown";
import PageDropdown from "./PageDropdown";
import BlogDropdown from "./BlogDropdown";

// import styles
import { IconWrapper, NavToggler } from "./commonStyles";

const RightNav = ({
  customStyle,
  toggleSigninDrawer,
  toggleWishlistDrawer,
  toggleCartDrawer,
  toggleNavigationDrawer,
}) => {
  return (
    <NavItemContainer>
      <ToggleContainer>
        <NavItems>
          <NavItem>
            HOME 
            {/* <i className="fa fa-angle-down" /> */}
            {/* <HomeDropdown /> */}
          </NavItem>
          <NavItem>
            SHOP 
            {/* <i className="fa fa-angle-down" /> */}
            {/* <ShopDropdown /> */}
          </NavItem>
          <NavItem>
            Catalog 
            {/* <i className="fa fa-angle-down" /> */}
            {/* <ProductDropdown /> */}
          </NavItem>

           <NavItem>
            ABOUT   &nbsp; <i className="fa fa-angle-down" />
            {/* <BlogDropdown /> */}
          </NavItem>


          {/* <NavItem>
            FEATURE 
            <i className="fa fa-angle-down" />
            <FeatureDropdown />
          </NavItem> */}
          {/* <NavItem>
            PAGES <i className="fa fa-angle-down" />
            <PageDropdown />
          </NavItem> */}
          {/* <NavItem>
            BLOG <i className="fa fa-angle-down" />
            <BlogDropdown />
          </NavItem> */}
        </NavItems>
      </ToggleContainer>
      <IconContainer>
        <IconWrapper onClick={() => toggleSigninDrawer()}>
          <i className="fa fa-user"></i>
        </IconWrapper>
        {/* <WishBox onClick={() => toggleWishlistDrawer()}>
          <span>
            <i className="fa fa-heart"></i>
          </span>

          <WishText>
            <span>5 ITEM</span>
            <span>WISHLIST</span>
          </WishText>
        </WishBox> */}
        {/* <CartIcon onClick={() => toggleCartDrawer()}>
          <span>0</span>
          <i className="fa fa-shopping-cart"></i>
        </CartIcon> */}
      </IconContainer>

      <NavToggler onClick={() => toggleNavigationDrawer()}>
        <i className="fa fa-bars"></i>
      </NavToggler>
    </NavItemContainer>
  );
};

const mapDispatchToProps = {
  toggleSigninDrawer: globalOperations.toggleSigninDrawer,
  toggleWishlistDrawer: globalOperations.toggleWishlistDrawer,
  toggleCartDrawer: globalOperations.toggleCartDrawer,
  toggleNavigationDrawer: globalOperations.toggleNavigationDrawer,
};

export default connect(null, mapDispatchToProps)(RightNav);

const NavItem = styled.li`
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;
  list-style: none;
  white-space: nowrap;
  color: black;
  position: relative;

  :hover {
    & ul {
      visibility: visible;
      opacity: 1;
    }

    & div {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const NavItems = styled.ul`
  list-style: none;
  padding: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 38vw; */
  font-size: 15px;
`;

const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: PT-Sans, sans-serif;
  font-weight: bold;
`;

const ToggleContainer = styled.div`
  width: 45vw;

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;

  @media screen and (max-width: 578px) {
    display: none;
  }
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

// const CartIcon = styled(IconWrapper)`
//   background-color: #ff6000;
//   padding: 10px 20px;
//   margin-left: 20px;
//   position: relative;
//   cursor: pointer;
//   color: white;
//   font-size: 24px;

//   & span {
//     right: 14%;
//     position: absolute;
//     top: 2%;
//     font-size: 20px;
//   }
// `;
