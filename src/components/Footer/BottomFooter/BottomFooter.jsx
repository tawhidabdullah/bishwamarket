import React from "react";
import styled from "styled-components";

// import dummy payment image
import visa from "../../../assets/payment/visa.png";
import mastercard from "../../../assets/payment/mastercard.png";
import paypal from "../../../assets/payment/paypal.png";
import express from "../../../assets/payment/express.png";
import western from "../../../assets/payment/western.png";

const BottomFooter = () => {
  return (
    <BottomFooterWrapper>
      <BottomFooterContainer>
        <CopyrightText>
          {new Date().getFullYear()} COPY RIGHT BY BISWABAZAR POWERED BY LOTUS
          TECHNOLOGY DEVELOPMENT
        </CopyrightText>
        <BottomFooterItem>
          <img src={visa} alt="" />
          <img src={mastercard} alt="" />
          <img src={paypal} alt="" />
          <img src={express} alt="" />
          <img src={western} alt="" />
        </BottomFooterItem>
      </BottomFooterContainer>
    </BottomFooterWrapper>
  );
};

export default BottomFooter;


const CopyrightText = styled.span`
  margin-bottom: 10px; 
`;

const BottomFooterWrapper = styled.div`
  margin-bottom: 50px;
  background-color: white;
  padding: 20px 0;
  width: 100%;
  font-family: PT Sans, sans-serif;
  color: #8d8d8d;
  text-align: center; 
`;

const BottomFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85vw;
  margin: 0 auto;

 

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div:first-child {
      padding-bottom: 10px;
    }
  }
`;

const BottomFooterItem = styled.div`
  display: flex;
  & img {
    padding: 0 10px;
    cursor: pointer;
    width: auto;
    height: 30px;
  }

  @media screen and (max-width: 991px) {
    margin-top: 10px;
  }
`;
