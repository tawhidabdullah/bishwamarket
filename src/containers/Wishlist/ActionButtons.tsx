//@ts-nocheck
import React from "react";
import styled from "styled-components";

const ActionButtons = ({ customStyle }) => {
  return (
    <ActionContainer customStyle={customStyle}>
      <ActionButton>&#10005;</ActionButton>
      <ActionButton>
        <i className="fa fa-shopping-cart"></i>
      </ActionButton>
    </ActionContainer>
  );
};

export default ActionButtons;

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
