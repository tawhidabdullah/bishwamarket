import React from "react";
import styled from "styled-components";

// ANCHOR should be refactored into one input component

const Select = ({ customStyle, label, options, name, handleChange }) => {
  return (
    <SelectContainer>
      <Label customStyle={customStyle}>{label}</Label>
      <SelectField
        customStyle={customStyle}
        name={name}
        onChange={handleChange}
      >
        <Option hidden>{label}</Option>
        {options &&
          options.length > 0 &&
          options.map((option, idx) => (
            <Option key={idx} value={option._id ? option._id : option}>
              {option.name ? option.name : option}
            </Option>
          ))}
      </SelectField>
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.div`
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

const SelectField = styled.select`
  padding: 10px 5px;
  border: 1px solid #d1dae8;
  outline: none;
  text-indent: 10px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  background: #fff;

  ::placeholder {
    font-size: 15px;
    letter-spacing: 1px;
  }

  ${(props) => props.customStyle}
`;

const Option = styled.option`
  font-size: 14px;
`;
