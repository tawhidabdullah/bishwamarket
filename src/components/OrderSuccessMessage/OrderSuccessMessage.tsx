// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// import element
import { Header } from "../elements/Header";
import { Text } from "../elements/Text";

const OrderSuccessMessage = () => {
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
              <Text
                customStyle={{
                  " font-size":
                    "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))",
                  padding: "unset",
                  color: "#777",
                }}
              >
                Payment Is Successfully Processsed And Your Order Is On The Way
              </Text>

              <br />
              <Text
                customStyle={{
                  " font-size":
                    "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))",
                  padding: "unset",
                  color: "#777",
                }}
              >
                Transaction ID:267676GHERT105467
              </Text>
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
