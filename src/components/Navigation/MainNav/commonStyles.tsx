import styled, { css } from "styled-components";

export const DropdownContainerStyles = css`
  visibility: hidden;
  opacity: 0;
  transition: all 400ms;
  transform: translateX(-50%);
  top: 40px;
  left: 96px;
  position: absolute;
  border: 4px solid #eee;
  background-color: #fff;
  z-index: 1000;
`;

export const DropdownItemStyles = css`
  list-style: none;
  /* text-align: left; */
  color: #777;
  font-weight: normal;
  padding: 5px 15px;
  /* text-decoration: none; */

  ::after {
    width: 0;
    height: 5px;
    content: "";
    background-color: #ffece1;
    font-weight: bold;
    display: block;
    transition: all 200ms;
    opacity: 0.9;
    position: relative;
    /* top: -8px; */
    color: #ffece1;
  }

  :hover {
    letter-spacing: 1.5px;
    transition: all 200ms;
    ::after {
      width: 40px;
      height: 5px;
      content: "";
      background-color: #ffece1;
      opacity: 0.9;
      font-weight: bold;
      display: block;
      /* top: -8px; */
      position: relative;
    }
  }
`;

export const Header = styled.h4`
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 5px;
  ${(props) => props.customStyle}
  margin-left: 13px;
  cursor: context-menu;
`;

export const DropdownItem = styled.span`
  ${DropdownItemStyles}
  font-size: 13px;
  cursor: pointer;
`;

export const IconWrapper = styled.span`
  padding: 0 10px;
  cursor: pointer;
`;

export const NavToggler = styled(IconWrapper)`
  color: #ff6000;
  font-size: 25px;
  padding: 0 15px;
  display: none;

  ${(props) => props.customStyle}

  @media screen and (max-width: 1199px) {
    display: unset;
  }
`;
