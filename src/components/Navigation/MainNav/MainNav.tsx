// @ts-nocheck

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// import statics, will be replaced in api implementation
import Logo from "../../../assets/logo.png";

// unify components
import RightNav from "./RightNav";

// import toggle category action
import { toggleCategoryDrawer } from "../../../redux/global/global.actions";

// import style
import { NavToggler } from "./commonStyles";

const MainNav = ({ toggleCategoryDrawer }) => {
  const history = useHistory();

  return (
    <MainNavContainer>
      <NavToggler
        onClick={() => toggleCategoryDrawer()}
        customStyle={{ color: "#777" }}
      >
        <i className="fa fa-bars"></i>
      </NavToggler>
      <LogoContainer onClick={() => history.push("/")}>
        <img src={Logo} alt="company logo" />
      </LogoContainer>
      <RightNav customStyle={{ color: "black", "font-weight": "bold" }} />
    </MainNavContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCategoryDrawer: () => dispatch(toggleCategoryDrawer()),
});

export default connect(null, mapDispatchToProps)(MainNav);

const MainNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const LogoContainer = styled.div`
  margin-right: auto;
  cursor: pointer;

  @media screen and (max-width: 991px) {
    width: 25%;
    height: auto;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 578px) {
    width: 30%;
    margin-right: unset;
    margin: 0 auto;
    /* text-align: center; */
  }
`;
