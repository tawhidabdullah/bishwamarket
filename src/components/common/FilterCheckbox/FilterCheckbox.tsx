//@ts-nocheck
import React from "react";
import styled from "styled-components";

const FilterCheckbox = ({
  label,
  customStyle,
  handleChange,
  value,
  ids,
  ...otherProps
}) => {
  return (
    <div>
      <Label customStyle={customStyle}>
        <Input
          customStyle={customStyle}
          type="checkbox"
          onChange={() => handleChange(value)}
          checked={ids.includes(value.id) ? true : false}
        />
        {label}
      </Label>
    </div>
  );
};

export default FilterCheckbox;

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
