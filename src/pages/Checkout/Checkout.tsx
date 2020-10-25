import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

// import containers
import { CheckoutForm } from "../../containers/CheckoutForm";
import { CheckoutDetails } from "../../containers/CheckoutDetails";

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <Header>Billing Details</Header>
      <Row>
        {/* <CheckoutContainer> */}
        <CheckoutForm customStyle={{}} />
        <CheckoutDetails />
        {/* </CheckoutContainer> */}
      </Row>
    </CheckoutWrapper>
  );
};

export default Checkout;

const CheckoutWrapper = styled.section`
  background-color: #f9f9f9;
  max-width: 100%;
  height: auto;
  padding: 30px;
  margin: 0 auto;
`;

// const CheckoutContainer = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const Header = styled.h2`
  text-align: left;
  font-size: 22px;
  font-weight: 700;
`;
