import React from "react";
import { Row, Col } from "react-bootstrap";

// import order info detail component
import { OrderInfoDetails } from "../../components/OrderInfoDetails";

import DeliveryBanner from "./DeliveryBanner";

const summeryList = [
  "Order ID: 5563853658932",
  "Order Date: October 22, 2018",
  "Order Total: $907.28",
];
const shippingAddress = [
  "Gerg Harvell",
  "568, Suite Ave.",
  "Austrlia, 235153",
  "Contact No. 987456321",
];

const customStyle = {
  "font-size": "calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))",
  "margin-bottom": "20px",
  "line-height": 1,
};

const OrderInfo = () => {
  return (
    <div>
      <Row>
        <Col sm={6}>
          <OrderInfoDetails
            header="Summery"
            infos={summeryList}
            customStyle={customStyle}
          />
        </Col>

        <Col sm={6}>
          <OrderInfoDetails
            header="Shipping Address"
            infos={shippingAddress}
            customStyle={customStyle}
          />
        </Col>

        <Col sm={12}>
          <OrderInfoDetails
            header="Payment Method"
            infos="Pay on Delivery (Cash/Card). Cash on delivery (COD) availabel. Card/Net banking acceptance subject to device availability."
            customStyle={{
              padding: "unset",
              "font-size": "16px",
              "line-height": "20px",
            }}
          />
        </Col>

        <Col md={12}>
          <DeliveryBanner />
        </Col>
      </Row>
    </div>
  );
};

export default OrderInfo;
