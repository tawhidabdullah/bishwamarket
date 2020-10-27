import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

// import component
import { OrderSuccessMessage } from "../../components/OrderSuccessMessage";
import { OrderDetails } from "../../containers/OrderDetails";
import { OrderInfo } from "../../containers/OrderInfo";

const OrderSuccess = () => {
  return (
    <section>
      <OrderSuccessMessage />
      <OrderSuccessContainer>
        <CustomContainer>
          <Row>
            <Col lg={6}>
              <OrderDetails />
            </Col>

            <Col lg={6}>
              <OrderInfo />
            </Col>
          </Row>
        </CustomContainer>
      </OrderSuccessContainer>
    </section>
  );
};

export default OrderSuccess;

const OrderSuccessContainer = styled.div`
  background-color: #f9f9f9 !important;
  padding: 50px 0;
  color: #777;
`;

const CustomContainer = styled.div`
  @media screen and (max-width: 1470px) {
    max-width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    /* padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto; */
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;
