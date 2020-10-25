import React from "react";
import styled from "styled-components";

const CheckoutForm = ({ customStyle }) => {
  return (
    <CheckoutFormContainer customStyle={customStyle}>
      
    </CheckoutFormContainer>
  );
};

export default CheckoutForm;

const CheckoutFormContainer = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 20px 10px;

  ${(props) => props.customStyle}
`;

// const FormContainer = styled.div
