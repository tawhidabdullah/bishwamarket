//@ts-nocheck
import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Header } from "../../components/elements/Header";
// import order info detail component
import { OrderInfoDetails } from "../../components/OrderInfoDetails";
import DeliveryBanner from "./DeliveryBanner";

const customStyle = {
  "font-size": "calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))",
  "margin-bottom": "20px",
  "line-height": 1,
};

const textStyles = {
  padding: "unset",
  "font-size": "16px",
  "line-height": "20px",
};

const OrderInfo = ({ order }) => {
  return (
    <div>
      <Row>
        <Col sm={6}>
          <OrderInfoDetailsContainer>
            <Header customStyle={customStyle} content="Order Info" />
            <InfoList>
              <InfoListItem>Order ID: {order.shortCode}</InfoListItem>
              <InfoListItem>
                Ordered: {new Date(order.added).toDateString()}
              </InfoListItem>
              <InfoListItem>Total Price: &#2547;&nbsp;{order.totalPrice}</InfoListItem>
            </InfoList>
          </OrderInfoDetailsContainer>
        </Col>

        <Col sm={6}>
          <OrderInfoDetailsContainer>
            <Header customStyle={customStyle} content="Shipping Address" />
            <InfoList>
              <InfoListItem>
                Name: {order.shippingAddress && order.shippingAddress.firstName}{" "}
                {order.shippingAddress && order.shippingAddress.lastName}
              </InfoListItem>

              <InfoListItem>
                City: {order.shippingAddress && order.shippingAddress.city}
              </InfoListItem>
              <InfoListItem>
                Country:{" "}
                {order.shippingAddress && order.shippingAddress.country}
              </InfoListItem>

              <InfoListItem>
                Address:{" "}
                {order.shippingAddress && order.shippingAddress.address1}
              </InfoListItem>
              <InfoListItem>Total Price: &#2547;&nbsp;{order.totalPrice}</InfoListItem>
            </InfoList>
          </OrderInfoDetailsContainer>
        </Col>

        <Col sm={12}>
          <OrderInfoDetails
            header="Payment Method"
            infos="Pay on Delivery (Cash/Card). Cash on delivery (COD) availabel. Card/Net banking acceptance subject to device availability."
            customStyle={textStyles}
          />
        </Col>

        <Col md={12}>
          <DeliveryBanner order={order} />
        </Col>
      </Row>
    </div>
  );
};

export default OrderInfo;

const OrderInfoDetailsContainer = styled.div`
  padding-bottom: 30px;
`;

const InfoList = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`;

const InfoListItem = styled.li`
  display: flex;
  text-transform: capitalize;
  font-size: 16px;
`;
