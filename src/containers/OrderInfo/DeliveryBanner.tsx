import React from "react";
import styled from "styled-components";

// import header element
import { Header } from "../../components/elements/Header";

const headerStyles = {
  "font-size": "calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))",
};

const textStyles = {
  "font-size": "calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))",
  "font-weight": 500,
};

const DeliveryBanner = ({ order }) => {
  return (
    <DeliveryBannerContainer>
      <Header customStyle={headerStyles} content="Expected Time of Delivery" />

      <Header
        customStyle={textStyles}
        content={order.deliveryRegion && order.deliveryRegion.time}
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
