import React from "react";
import styled from "styled-components";

import { Header } from "../../components/elements/Header";

// import orderd product details
import { OrderedProductDetails } from "../../components/OrderedProductDetails";

// import order price component
import { OrderPrice } from "../../components/OrderPrice";

const headerStyles = {
  "font-size": "calc(18px + (26 - 18) * ((100vw - 320px) / (1920 - 320)))",
  "line-height": 1,
};

const OrderDetails = ({ products, totalPrice, deliveryCharge }) => {
  return (
    <OrderDetailsContainer>
      <Header customStyle={headerStyles} content="Your Order Details" />

      {products &&
        products.length > 0 &&
        products.map((product) => <OrderedProductDetails product={product} />)}

      <OrderPrice totalPrice={totalPrice} deliveryCharge={deliveryCharge} />
    </OrderDetailsContainer>
  );
};

export default OrderDetails;

const OrderDetailsContainer = styled.div``;
