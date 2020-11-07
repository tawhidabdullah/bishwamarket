import React from "react";
import styled from "styled-components";

const TextArea = ({ label, placeholder, sizes: { rows }, customStyle }) => {
  return (
    <TextAreaContainer>
      <Label customStyle={customStyle}>{label}</Label>
      <Textarea placeholder={placeholder} rows={rows} />
    </TextAreaContainer>
  );
};

export default TextArea;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 10px 0;
  font-size: 15px;

  ${(props) =>
    props.customStyle && props.customStyle.label
      ? props.customStyle.label
      : null}
`;

const Textarea = styled.textarea`
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

  ${(props) => props.customStyle}
`;
