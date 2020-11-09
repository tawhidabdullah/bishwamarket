import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import header element
import { Header } from "../elements/Header";

// url config
import config from "../../config.json";

const headerStyles = {
  "font-size": "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))",
  "margin-bottom": "5px",
};

const textStyles = {
  "font-size": "16px",
  "margin-bottom": "0",
  "font-weight": "500",
  "text-transform": "none",
  color: "rgb(119, 119, 119)",
};

const OrderedProductDetails = ({ product }) => {
  console.log("product", product);
  return (
    <CustomRow>
      <Col xs={3}>
        <Image
          src={`${config.baseURL}/${product.cover.thumbnail}`}
          alt="order details"
        />
      </Col>
      <CustomColumn xs={3}>
        <Header customStyle={headerStyles} content="Product name" />

        <Header customStyle={textStyles} content={product.name} />
      </CustomColumn>

      <CustomColumn xs={3}>
        <Header customStyle={headerStyles} content="Quantity" />

        <Header customStyle={textStyles} content={product.quantity} />
      </CustomColumn>
      <CustomColumn xs={3}>
        <Header customStyle={headerStyles} content="Price" />

        <Header customStyle={textStyles} content={`৳ ${product.price}`} />
      </CustomColumn>
    </CustomRow>
  );
};

export default OrderedProductDetails;

const CustomRow = styled(Row)`
  margin-top: 40px;
  font-family: PT Sans, sans-serif;
`;

const Image = styled.img`
  height: 130px;
`;

const CustomColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
