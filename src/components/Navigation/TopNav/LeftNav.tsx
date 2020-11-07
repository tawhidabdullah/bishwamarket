//@ts-nocheck
import React from "react";
import styled from "styled-components";

// import common component
import { ItemText } from "../../common/ItemText";

const LeftNav = () => {
  return (
    <LeftContainer>
      <ItemText>Free shipping on order over $99</ItemText>
      <ItemText>Download app</ItemText>
      <ItemText>
        <i className="fa fa-apple"></i>
      </ItemText>

      <ItemText>
        <i className="fa fa-android"></i>
      </ItemText>

      <ItemText>
        <i className="fa fa-windows"></i>
      </ItemText>
    </LeftContainer>
  );
};

export default LeftNav;

const LeftContainer = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    span:first-child {
      display: none;
    }
  }

  @media screen and (max-width: 578px) {
    margin: 0 auto;
  }
`;
