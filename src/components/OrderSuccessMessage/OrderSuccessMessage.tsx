// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// import element
import { Header } from "../elements/Header";
import { Text } from "../elements/Text";

const textStyles = {
  " font-size": "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))",
  padding: "unset",
  color: "#777",
};

const OrderSuccessMessage = ({ orderStatus }) => {
  console.log("orderstatus", orderStatus);
  return (
    <OrderSuccessMessageWrapper>
      <Container>
        <Row>
          <Col md={12}>
            <MessageContainer>
              <Icon className="fa fa-check-circle" />
              <Header
                customStyle={{ "font-size": "30.46px" }}
                content="Thank you"
              />
              <Text customStyle={textStyles}>
                Your order is placed successfully and your current order status
                is: <strong>{orderStatus.toUpperCase()}</strong>
              </Text>

              <br />
              {/* <Text customStyle={textStyles}>Transaction ID:{""}</Text> */}
            </MessageContainer>
          </Col>
        </Row>
      </Container>
    </OrderSuccessMessageWrapper>
  );
};

export default OrderSuccessMessage;

const OrderSuccessMessageWrapper = styled.div`
  background-color: #f1f1f1;
  padding: 50px 0;
  /* font-size: 14px;
  font-weight: 400; */
  font-family: PT Sans, sans-serif;
`;

const MessageContainer = styled.div`
  text-align: center;
`;
const Icon = styled.i`
  font-size: 50px;
  color: #4ead4e;
`;
