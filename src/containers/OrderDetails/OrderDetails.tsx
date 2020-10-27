import React from "react";
import styled from "styled-components";

import { Header } from "../../components/elements/Header";

// import orderd product details
import { OrderedProductDetails } from "../../components/OrderedProductDetails";

// import order price component
import { OrderPrice } from "../../components/OrderPrice";

const OrderDetails = () => {
  return (
    <OrderDetailsContainer>
      <Header
        customStyle={{
          "font-size":
            "calc(18px + (26 - 18) * ((100vw - 320px) / (1920 - 320)))",
          "line-height": 1,
        }}
        content="Your Order Details"
      />

      <OrderedProductDetails />
      <OrderedProductDetails />

      <OrderPrice />
    </OrderDetailsContainer>
  );
};

export default OrderDetails;

const OrderDetailsContainer = styled.div``;
