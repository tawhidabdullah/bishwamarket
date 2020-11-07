import React from "react";
import styled from "styled-components";

// import header element
import { Header } from "../../components/elements/Header";

const DeliveryBanner = () => {
  return (
    <DeliveryBannerContainer>
      <Header
        customStyle={{
          "font-size":
            "calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))",
        }}
        content="Expected Date of Delivery"
      />

      <Header
        customStyle={{
          "font-size":
            "calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))",
          "font-weight": 500,
        }}
        content={new Date().toDateString()}
      />
    </DeliveryBannerContainer>
  );
};

export default DeliveryBanner;

const DeliveryBannerContainer = styled.div`
  padding: 30px;
  text-align: center;
  margin-top: 20px;
  background-color: #eee;
`;
