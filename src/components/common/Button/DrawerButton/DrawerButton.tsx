import React from "react";
import styled from "styled-components";

interface Props {
  children: any;
  customStyle: any;
  wrapperStyle: any;
  onClick?: any;
  type?: string;
}

const AuthButton = ({
  children,
  customStyle,
  wrapperStyle,
  onClick,
  type = "button",
}: Props) => {
  return (
    <AuthButtonContainer wrapperStyle={wrapperStyle}>
      <Button type={type} customStyle={customStyle} onClick={onClick}>
        {children}
      </Button>
    </AuthButtonContainer>
  );
};

export default AuthButton;

const AuthButtonContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;

  ${(props) => props.wrapperStyle}
`;

const Button = styled.button`
  padding: 15px 0;
  width: 100%;
  border: none;
  background-color: #5c2c90;
  color: ghostwhite;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s;
  outline: none;

  :focus {
    outline: none;
  }

  :hover {
    background-color: #000;
  }

  ${(props) => props.customStyle}
`;
