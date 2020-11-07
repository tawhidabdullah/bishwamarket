import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

// import header element
import { Header } from "../elements/Header";

// import dummy image
import orderImage from "../../assets/wishlist/image1.jpg";

const OrderedProductDetails = () => {
  return (
    <CustomRow>
      <Col xs={3}>
        <Image src={orderImage} alt="order details" />
      </Col>
      <CustomColumn xs={3}>
        <Header
          customStyle={{
            "font-size":
              "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))",
            "margin-bottom": "5px",
          }}
          content="Product name"
        />

        <Header
          customStyle={{
            "font-size": "16px",
            "margin-bottom": "0",
            "font-weight": "500",
            "text-transform": "none",
            color: "rgb(119, 119, 119)",
          }}
          content="Cotton Shirt"
        />
      </CustomColumn>

      <CustomColumn xs={3}>
        <Header
          customStyle={{
            "font-size":
              "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))",
            "margin-bottom": "5px",
          }}
          content="Quantity"
        />

        <Header
          customStyle={{
            "font-size": "16px",
            "margin-bottom": "0",
            "font-weight": "500",
            "text-transform": "none",
            color: "rgb(119, 119, 119)",
          }}
          content="1"
        />
      </CustomColumn>
      <CustomColumn xs={3}>
        <Header
          customStyle={{
            "font-size":
              "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))",
            "margin-bottom": "5px",
          }}
          content="Price"
        />

        <Header
          customStyle={{
            "font-size": "16px",
            "margin-bottom": "0",
            "font-weight": "500",
            "text-transform": "none",
            color: "rgb(119, 119, 119)",
          }}
          content="$250.15"
        />
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
