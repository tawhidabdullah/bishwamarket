import React from "react";
import styled from "styled-components";

const DrawerHeader = ({ content, handleClose, customStyle }) => {
  return (
    <DrawerHeaderContainer customStyle={customStyle}>
      <HeaderText>{content}</HeaderText>
      <HeaderText onClick={handleClose}>
        <i className="fa fa-times"></i>
      </HeaderText>
    </DrawerHeaderContainer>
  );
};

export default DrawerHeader;

const DrawerHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 35px;
  ${(props) => props.customStyle}
`;

const HeaderText = styled.span`
  font-size: 18px;
  /* padding: 15px 25px; */
  font-weight: bold;
  font-family: Roboto, sans-serif;

  :last-child {
    cursor: pointer;
  }
`;
