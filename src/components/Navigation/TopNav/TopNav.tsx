// @ts-nocheck

import React from "react";
import styled from "styled-components";

// unify components
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const TopNav = (props) => {
  return (
    <TopNavContainer>
      <LeftNav />
      {/* <RightNav
        languageList={props.languageList}
        toggleLingual={props.toggleLingual}
        setToggleLingual={props.setToggleLingual}
        currencyList={props.currencyList}
        toggleCurrency={props.toggleCurrency}
        setToggleCurrency={props.setToggleCurrency}
      /> */}
    </TopNavContainer>
  );
};

export default TopNav;

const TopNavContainer = styled.div`
  background: #ff6000;
  padding: 13px 20px;
  width: 100%;
  display: flex;
`;
