import React from "react";
import styled from "styled-components";

export const Color = ({ children, customStyle }) => {
  return <ColorContainer customStyle={customStyle}>{children}</ColorContainer>;
};

export const Size = ({ children, customStyle, ...props }) => {
  return (
    <SizeContainer customStyle={customStyle} {...props}>
      {children}
    </SizeContainer>
  );
};

const ColorContainer = styled.span`
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.customStyle}
`;

const SizeContainer = styled(ColorContainer)`
  padding: 6px 10px;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: #ddd;
  }
`;
