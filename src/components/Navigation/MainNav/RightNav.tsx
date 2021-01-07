//@ts-nocheck
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import global actions
import { globalOperations } from "../../../state/ducks/globalState";
import AccountDropdown from "./AccountDropdown";
import BlogDropdown from "./BlogDropdown";

// import styles
import { IconWrapper, NavToggler } from "./commonStyles";

const RightNav = ({
  customStyle,
  toggleSigninDrawer,
  toggleWishlistDrawer,
  toggleCartDrawer,
  toggleNavigationDrawer,
  isAuthenticated,
}) => {
  const alert = useAlert();

  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      const token = localStorage.getItem("authToken");
      try {
        setCustomerData(jwt_decode(token));
      } catch (error) {
        alert.error("Unauthorized access");
      }
    }
  }, [isAuthenticated]);

  return (
    <NavItemContainer>
      <ToggleContainer>
        <NavItems>
          <NavItem to="/">
            HOME
            {/* <i className="fa fa-angle-down" /> */}
            {/* <HomeDropdown /> */}
          </NavItem>
          <NavItem to="/product">
            SHOP
            {/* <i className="fa fa-angle-down" /> */}
            {/* <ShopDropdown /> */}
          </NavItem>
          <NavItem to="/collection">
            COLLECTION
            {/* <i className="fa fa-angle-down" /> */}
            {/* <ProductDropdown /> */}
          </NavItem>

          <NavItem to="##">
            ABOUT <i className="fa fa-angle-down" />
            <BlogDropdown />
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

          <NavItem to="##">
            {isAuthenticated
              ? `Logged in as ${customerData && customerData.firstName}`
              : "ACCOUNT"}{" "}
            <span>
              <i className="fa fa-angle-down" />
            </span>
            <AccountDropdown isAuthenticated={isAuthenticated} />
          </NavItem>
        </NavItems>
      </ToggleContainer>
      <IconContainer>
        {/* <IconWrapper onClick={() => toggleSigninDrawer()}>
          <i className="fa fa-user"></i>
        </IconWrapper> */}
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
        <i className="fa fa-bars" />
      </NavToggler>
    </NavItemContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = {
  toggleSigninDrawer: globalOperations.toggleSigninDrawer,
  toggleWishlistDrawer: globalOperations.toggleWishlistDrawer,
  toggleCartDrawer: globalOperations.toggleCartDrawer,
  toggleNavigationDrawer: globalOperations.toggleNavigationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);

const NavItem = styled(Link)`
  cursor: pointer;
  transition: 200ms;
  list-style: none;
  white-space: nowrap;
  color: black;
  position: relative;
  text-transform: uppercase;

  & a {
    text-decoration: none;
    color: black;
  }

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

  & a {
    text-decoration: none;
    color: black;
  }
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
    color: #5c2c90;
  }
`;

// const CartIcon = styled(IconWrapper)`
//   background-color: #5C2C90;
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
