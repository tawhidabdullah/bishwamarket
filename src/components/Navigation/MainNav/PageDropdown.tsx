import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import styles
import { DropdownContainerStyles, DropdownItemStyles } from "./commonStyles";

// all nested components will be refactored

const Homedropdown = (props) => {
  return (
    <>
      <PageDropdownContainer>
        <PageDropdownItem>
          Account <Icon className="fa fa-angle-right" />
          <NestedDropdownContainer>
            <NestedDropdownItem to="/wishlist">Wishlist</NestedDropdownItem>
            <NestedDropdownItem to="/cart">Cart</NestedDropdownItem>
            <NestedDropdownItem to="/dashboard">Dashboard</NestedDropdownItem>
            <NestedDropdownItem to="/signin">Login</NestedDropdownItem>
            <NestedDropdownItem to="/signup">Register</NestedDropdownItem>
            <NestedDropdownItem to="/contact">Contact</NestedDropdownItem>
            <NestedDropdownItem to="/forgot-password">
              Forgot Password
            </NestedDropdownItem>
            <NestedDropdownItem to="/profile">Profile</NestedDropdownItem>
            <NestedDropdownItem to="/checkout">Checkout</NestedDropdownItem>
          </NestedDropdownContainer>
        </PageDropdownItem>

        <PageDropdownItem>About Us</PageDropdownItem>
        <PageDropdownItem to="/search">Search</PageDropdownItem>
        <PageDropdownItem>Typography</PageDropdownItem>
        <PageDropdownItem>Review</PageDropdownItem>
        <PageDropdownItem to="/order-success">Order Success</PageDropdownItem>
        <PageDropdownItem to="/order-history">Order History</PageDropdownItem>
        <PageDropdownItem>
          Compare <Icon className="fa fa-angle-right" />
          <NestedDropdownContainer customStyle={{ top: "250px" }}>
            <NestedDropdownItem to="/compare">Compare</NestedDropdownItem>
            <NestedDropdownItem to="/compare2">Compare 2</NestedDropdownItem>
          </NestedDropdownContainer>
        </PageDropdownItem>
        <PageDropdownItem>Collection</PageDropdownItem>
        <PageDropdownItem>Lookbook</PageDropdownItem>
        <PageDropdownItem>404</PageDropdownItem>
        <PageDropdownItem>Coming Soon</PageDropdownItem>
        <PageDropdownItem>FAQ</PageDropdownItem>
      </PageDropdownContainer>
    </>
  );
};

export default Homedropdown;

const PageDropdownContainer = styled.div`
  ${DropdownContainerStyles}
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 10px;

  & a {
    text-decoration: none;
    color: #777;
  }
`;

const PageDropdownItem = styled(Link)`
  ${DropdownItemStyles};

  :hover {
    & div {
      visibility: visible !important;
      opacity: 1;
    }
  }
`;

// const NestedDropdownWrapper = styled.div`
//   :hover {
//     & div:last-child {
//       visibility: visible;
//       opacity: 1;
//     }
//   }
// `;

const Icon = styled.i`
  margin-left: 70px;
`;

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

  & a {
    text-decoration: none;
  }

  ${(props) => props.customStyle}
`;

const NestedDropdownItem = styled(Link)`
  ${DropdownItemStyles}
`;
