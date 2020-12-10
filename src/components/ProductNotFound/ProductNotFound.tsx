import React from "react";
import styled from "styled-components";

const ProductNotFound = ({ children }) => (
  <NotFoundContainer>{children}</NotFoundContainer>
);

export default ProductNotFound;

const NotFoundContainer = styled.div`
  /* height: 200px; */
  padding: 50px 0;
  color: #5c2c90;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;
