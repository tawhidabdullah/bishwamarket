import React from "react";
import styled from "styled-components";

// import styles
import { DropdownContainerStyles, DropdownItemStyles } from "./commonStyles";

const Homedropdown = (props) => {
  return (
    <>
      <PageDropdownContainer>
        <PageDropdownItem>
          Account <Icon className="fa fa-angle-right" />
          <NestedDropdownContainer>
            <NestedDropdownItem>Wishlist</NestedDropdownItem>
            <NestedDropdownItem>Cart</NestedDropdownItem>
            <NestedDropdownItem>Dashboard</NestedDropdownItem>
            <NestedDropdownItem>Login</NestedDropdownItem>
            <NestedDropdownItem>Register</NestedDropdownItem>
            <NestedDropdownItem>Contact</NestedDropdownItem>
            <NestedDropdownItem>Forgot Password</NestedDropdownItem>
            <NestedDropdownItem>Profile</NestedDropdownItem>
            <NestedDropdownItem>Checkout</NestedDropdownItem>
          </NestedDropdownContainer>
        </PageDropdownItem>

        <PageDropdownItem>About Us</PageDropdownItem>
        <PageDropdownItem>Search</PageDropdownItem>
        <PageDropdownItem>Typography</PageDropdownItem>
        <PageDropdownItem>Review</PageDropdownItem>
        <PageDropdownItem>Order Success</PageDropdownItem>
        <PageDropdownItem>Order History</PageDropdownItem>
        <PageDropdownItem>
          Compare <Icon className="fa fa-angle-right" />
          <NestedDropdownContainer customStyle={{ top: "250px" }}>
            <NestedDropdownItem>Compare</NestedDropdownItem>
            <NestedDropdownItem>Compare 2</NestedDropdownItem>
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
`;

const PageDropdownItem = styled.span`
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

  ${(props) => {
    console.log(props.customStyle);
    return props.customStyle;
  }}
`;

const NestedDropdownItem = styled.span`
  ${DropdownItemStyles}
`;
