import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import containers
import { CheckoutForm } from "../../containers/CheckoutForm";
import { CheckoutDetails } from "../../containers/CheckoutDetails";

const Checkout = () => {
  const [shippingCost, setShippingCost] = useState(0);
  const getShippingCost = (cost) => setShippingCost(cost);

  const [deliveryInfo, setDeliveryInfo] = useState(null);

  return (
    <CheckoutWrapper>
      <Header>Billing Details</Header>
      <Row>
        <Col lg={6} sm={12} xs={12}>
          <CheckoutForm
            getDeliveryInfo={setDeliveryInfo}
            getShippingCost={getShippingCost}
            customStyle={{}}
          />
        </Col>

        <Col lg={6} sm={12} xs={12}>
          <CheckoutDetails
            deliveryInfo={deliveryInfo}
            shippingCost={shippingCost}
          />
        </Col>
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

const Header = styled.h2`
  text-align: left;
  font-size: 22px;
  font-weight: 700;
`;
