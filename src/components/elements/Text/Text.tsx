import React from "react";
import styled from "styled-components";

const Text = ({ children, customStyle, clickAction }) => {
  return (
    <TextContainer
      onClick={clickAction ? clickAction : () => {}}
      customStyle={customStyle}
    >
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.span`
  font-size: 22px;
  padding: 15px 10px;
  font-family: Roboto, sans-serif;
  letter-spacing: 1px;
  line-height: 1.2em;
  padding-left: 0;

  ${(props) => props.customStyle}
`;
