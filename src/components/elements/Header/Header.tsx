import React from "react";
import styled from "styled-components";

const Header = ({ customStyle, content }) => {
  return <HeaderContainer customStyle={customStyle}>{content}</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.h2`
  text-transform: uppercase;
  color: #333;
  font-weight: 700;

  ${(props) => props.customStyle}
`;
