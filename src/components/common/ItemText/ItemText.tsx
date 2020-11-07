import React from "react";
import styled from "styled-components";

const ItemText = ({ children, customStyles, isIcon, ...props }) => {
  return (
    <ItemTextContainer customStyles={customStyles}>
      {children}
      {isIcon && (
        <Icon
          onClick={() => props.setToggle && props.setToggle(!props.isToggle)}
          className="fa fa-angle-down"
        ></Icon>
      )}
    </ItemTextContainer>
  );
};

export default ItemText;

const ItemTextContainer = styled.span`
  position: relative;
  color: white;
  font-size: 13px;
  font-weight: 300;
  text-transform: capitalize;
  cursor: pointer;
  padding: 0 8px;
  ${(props) => props.customStyles};
`;

const Icon = styled.i`
  padding-left: 10px;
`;
