import React from "react";
import styled from "styled-components";

// import containers
import { CheckoutForm } from "../../containers/CheckoutForm";

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <Header>Billing Details</Header>
      <CheckoutContainer>
        <CheckoutForm customStyle={{ "margin-right": "13px" }} />
        <CheckoutForm customStyle={{ "margin-left": "13px" }} />
      </CheckoutContainer>
    </CheckoutWrapper>
  );
};

export default Checkout;

const CheckoutWrapper = styled.section`
  background-color: #f9f9f9;
  width: 100%;
  height: auto;
  padding: 30px;
`;

const CheckoutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h2`
  text-align: left;
  font-size: 22px;
  font-weight: 700;
`;
