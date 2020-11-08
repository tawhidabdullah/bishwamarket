//@ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilterCheckbox = ({
  label,
  customStyle,
  handleChange,
  value,
  ids,
  subCategory,
  header,
  ...otherProps
}) => {
  const [isCategoryParentOpen, setIsCategoryParentOpen] = useState(false);

  useEffect(() => {
    subCategory &&
      subCategory.length > 0 &&
      subCategory.map((sub) => {
        if (ids.includes(sub.id)) {
          setIsCategoryParentOpen(true);
        }
      });
  }, []);

  return (
    <div>
      {header === "Category" && subCategory && subCategory.length > 0 && (
        <span
          onClick={() => setIsCategoryParentOpen((value) => !value)}
          style={{
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <i
            className={`fa fa-angle-${isCategoryParentOpen ? "down" : "right"}`}
          ></i>
        </span>
      )}

      <Label customStyle={customStyle}>
        <Input
          customStyle={{ ...customStyle, "margin-left": "10px" }}
          type="checkbox"
          onChange={() => handleChange(value)}
          checked={ids.includes(value.id) ? true : false}
        />
        {label}
      </Label>

      {header === "Category" &&
        subCategory &&
        subCategory.length > 0 &&
        isCategoryParentOpen && (
          <DropdownContainer>
            {subCategory &&
              subCategory.map((sub) => (
                <>
                  <Label customStyle={customStyle}>
                    <Input
                      customStyle={customStyle}
                      type="checkbox"
                      onChange={() => handleChange({ id: sub.id, header })}
                      checked={ids.includes(sub.id) ? true : false}
                    />
                    {sub.name}
                  </Label>{" "}
                  <br />
                </>
              ))}
          </DropdownContainer>
        )}
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

const DropdownContainer = styled.div`
  padding-left: 40px;
  margin-bottom: 10px;
`;
