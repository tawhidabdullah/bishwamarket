import React from "react";
import styled from "styled-components";

const AuthButton = ({ children, customStyle }) => {
  // console.log(customStyle);
  return (
    <AuthButtonContainer>
      <Button customStyle={customStyle}>{children}</Button>
    </AuthButtonContainer>
  );
};

export default AuthButton;

const AuthButtonContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
`;

const Button = styled.button`
  padding: 15px 0;
  width: 100%;
  border: none;
  background-color: #ff6000;
  color: ghostwhite;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s;
  outline: none;

  ${(props) => props.customStyle}

  :hover {
    background-color: #000;
  }
`;
