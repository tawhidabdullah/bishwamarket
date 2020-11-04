//@ts-nocheck
import React, { Fragment } from "react";
import styled from "styled-components";

// import common elements
import { Header } from "../elements/Header";
import { Text } from "../elements/Text";

const textStyles = {
  "font-size": "16px",
  "margin-bottom": "10px",
};

const headerStyles = {
  "font-weight": 600,
  "font-size": "22px",
  "margin-bottom": "10px",
};

const DeliveryAreaInfo = ({ deliveryInfo }) => {
  return (
    <DeliveryAreaInfoContainer>
      <Header customStyle={headerStyles} content="Delivery Area Information" />
      <hr />

      {deliveryInfo ? (
        <Fragment>
          <Text customStyle={textStyles}>
            Location: {deliveryInfo.pickUpLocation}
          </Text>
          <br />
          <br />
          <Text customStyle={textStyles}>Area: {deliveryInfo.name}</Text> <br />
          <br />
          <Text customStyle={textStyles}>
            Payment Method: Cash on Delivery
          </Text>{" "}
          <br />
          <br />
          <Text customStyle={textStyles}>Time: {deliveryInfo.time}</Text>
        </Fragment>
      ) : (
        <Text customStyle={textStyles}>
          Please select a delivery area to order!
        </Text>
      )}
    </DeliveryAreaInfoContainer>
  );
};

export default DeliveryAreaInfo;

const DeliveryAreaInfoContainer = styled.div`
  padding: 30px;
  background-color: #f1f4f7;
  border: 30px solid #fff;
  border-bottom: 0;

  @media screen and (max-width: 400px) {
    padding: 10px;
    border: 10px solid #fff;
  }
`;
