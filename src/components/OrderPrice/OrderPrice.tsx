//@ts-nocheck
import React, { Fragment } from "react";
import styled from "styled-components";

import { Text } from "../elements/Text";

const textStyles = {
  float: "right",
  padding: "unset",
  color: "#000",
  "font-size": "16px",
  "font-weight": 500,
};

const OrderPrice = () => {
  return (
    <Fragment>
      <OrderPriceContainer>
        <PriceList>
          <PriceListItem>
            Subtotal
            <Text customStyle={textStyles}>$240.00 </Text>
          </PriceListItem>

          <PriceListItem>
            Shipping
            <Text customStyle={textStyles}>$10.00 </Text>
          </PriceListItem>

          <PriceListItem>
            Tax(GST)
            <Text customStyle={textStyles}>$0.15 </Text>
          </PriceListItem>
        </PriceList>
      </OrderPriceContainer>
      <TotalPrice>
        Total
        <Text customStyle={textStyles}>$250.15</Text>
      </TotalPrice>
    </Fragment>
  );
};

export default OrderPrice;

const OrderPriceContainer = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 15px 0;
  padding: 15px 0;
`;

const PriceList = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`;

const PriceListItem = styled.li`
  font-size: 16px;
  display: block;
  text-transform: capitalize;
  color: #333;
`;

const TotalPrice = styled.h3`
  font-size: 22px;
  padding: 10px 0;
`;
