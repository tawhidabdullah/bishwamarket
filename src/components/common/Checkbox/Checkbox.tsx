import React from "react";
import styled from "styled-components";

// ANCHOR should refactor into one single input component

// TODO checkbox component for radio option not working
const Checkbox = ({
  label,
  customStyle,
  handleChange,
  checked,
  type,
  ...otherProps
}) => {
  if (otherProps) delete otherProps.sizes;
  return (
    <CheckboxContainer>
      <Label
        // htmlFor={otherProps && otherProps.id && otherProps.id}
        customStyle={customStyle}
      >
        <Input
          customStyle={customStyle}
          type={type ? type : "checkbox"}
          onChange={
            type && type === "radio"
              ? () => handleChange(otherProps.id)
              : () => {}
          }
          checked={checked}
        />
        {label}
      </Label>
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled.div`
  /* display: flex;
  align-items: center; */
`;

const Label = styled.label`
  padding: 10px 0;
  font-size: 15px;
  cursor: pointer;

  ${(props) =>
    props.customStyle && props.customStyle.label
      ? props.customStyle.label
      : null}
`;

const Input = styled.input`
  margin: 0 10px 10px 0;
  cursor: pointer;

  ${(props) => props.customStyle}
`;
