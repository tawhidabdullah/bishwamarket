//@ts-nocheck
import React from "react";
import styled from "styled-components";

// import table text elements
import TableText from "./TableText";

const MobileRow = () => {
  return (
    <MobileRowContainer>
      <TableText content="In Stock" />
      <TableText>$250.15</TableText>
      <TableText>
        <ActionContainer
          customStyle={{
            "flex-direction": "column",
            "margin-top": "-10px",
          }}
        >
          <ActionButton>&#10005;</ActionButton>
          <ActionButton>
            <i className="fa fa-shopping-cart"></i>
          </ActionButton>
        </ActionContainer>
      </TableText>
    </MobileRowContainer>
  );
};

export default MobileRow;

const MobileRowContainer = styled.div`
  display: none;
  margin-top: 10px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;

    & p {
      padding: 0 10px;
    }

    & p:nth-child(2) {
      color: #000;
    }
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.customStyle}
`;

const ActionButton = styled.span`
  padding: 0 5px;
  cursor: pointer;
  color: #000;
`;
