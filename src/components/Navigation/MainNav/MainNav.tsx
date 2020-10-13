// @ts-nocheck

import React from "react";
import styled from "styled-components";

// import statics, will be replaced in api implementation
import Logo from "../../../assets/logo.png";

// unify components
import RightNav from "./RightNav";

const MainNav = ({ openSigninDrawer, openWishListDrawer }) => {
  return (
    <MainNavContainer>
      <LogoContainer>
        <img src={Logo} alt="company logo" />
      </LogoContainer>
      <RightNav
        openSigninDrawer={openSigninDrawer}
        openWishListDrawer={openWishListDrawer}
        customStyles={{ color: "black", "font-weight": "bold" }}
      />
    </MainNavContainer>
  );
};

export default MainNav;

const MainNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`;

const LogoContainer = styled.div`
  margin-right: auto;
`;
