// @ts-nocheck

import React from "react";
import styled from "styled-components";

// import statics, will be replaced in api implementation
import Logo from "../../../assets/logo.png";

// unify components
import RightNav from "./RightNav";

// import style
import { NavToggler } from "./commonStyles";

const MainNav = ({
  openSigninDrawer,
  openWishListDrawer,
  openCartDrawer,
  openNavDrawer,
  openCategoryDrawer,
}) => {
  return (
    <MainNavContainer>
      <NavToggler onClick={openCategoryDrawer} customStyle={{ color: "#777" }}>
        <i className="fa fa-bars"></i>
      </NavToggler>
      <LogoContainer>
        <img src={Logo} alt="company logo" />
      </LogoContainer>
      <RightNav
        openSigninDrawer={openSigninDrawer}
        openWishListDrawer={openWishListDrawer}
        openCartDrawer={openCartDrawer}
        openNavDrawer={openNavDrawer}
        customStyle={{ color: "black", "font-weight": "bold" }}
      />
    </MainNavContainer>
  );
};

export default MainNav;

const MainNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 20px 0;
`;

const LogoContainer = styled.div`
  margin-right: auto;
`;
