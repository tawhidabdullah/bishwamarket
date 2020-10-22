import React from "react";
import styled from "styled-components";

export const Color = ({ children, customStyle }) => {
  return <ColorContainer customStyle={customStyle}>{children}</ColorContainer>;
};

export const Size = ({ children, customStyle }) => {
  return <SizeContainer customStyle={customStyle}>{children}</SizeContainer>;
};

const ColorContainer = styled.span`
  border-radius: 50%;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  ${(props) => props.customStyle}
`;

const SizeContainer = styled(ColorContainer)`
  width: 35px;
  height: 35px;
  padding: 6px 10px;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: #ddd;
  }
`;
