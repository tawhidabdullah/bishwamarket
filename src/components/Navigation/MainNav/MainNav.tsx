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
import { toggleCategoryDrawer } from "../../../state/ducks/globalState/actions";

// import style
import { NavToggler } from "./commonStyles";

// import config
import config from "../../../config.json";

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
        <img src={`${config.baseURL}/images/logo.png`} alt="company logo" />
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
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    width: 97%;
  }
`;

const LogoContainer = styled.div`
  /* width: 150px; */
  height: 70px;
  margin-right: 20px;
  cursor: pointer;
  height: 75px;
  margin-left: 50px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 578px) {
    width: 30%;
    margin-right: unset;
    margin: 0 auto;
    /* text-align: center; */
  }
`;
