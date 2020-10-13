//@ts-nocheck
import React from "react";
import styled from "styled-components";

const InputField = ({ label, type, placeholder }) => {
  return (
    <InputFieldContainer>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </InputFieldContainer>
  );
};

export default InputField;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 10px 0;
  font-size: 15px;
`;

const Input = styled.input`
  border-radius: 20px;
  padding: 10px 5px;
  border: 1px solid #d1dae8;
  outline: none;
  text-indent: 10px;
  margin-bottom: 10px;
  letter-spacing: 1px;

  ::placeholder {
    font-size: 15px;
    letter-spacing: 1px;
  }
`;
