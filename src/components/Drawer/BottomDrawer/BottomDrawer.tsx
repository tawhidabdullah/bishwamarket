import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import toggle drawer actions
import {
  toggleCartDrawer,
  toggleSigninDrawer,
  toggleWishlistDrawer,
  toggleSettingsDrawer,
  toggleSearchDrawer,
} from "../../../redux/global/global.actions";

const BottomDrawer = ({
  toggleCartDrawer,
  toggleSigninDrawer,
  toggleWishlistDrawer,
  toggleSettingsDrawer,
  toggleSearchDrawer,
}) => {
  return (
    <BottomDrawerWrapper>
      <BottomDrawerContainer>
        <DrawerIcon onClick={() => toggleSearchDrawer()}>
          <i className="fa fa-search"></i>
        </DrawerIcon>

        <DrawerIcon onClick={() => toggleWishlistDrawer()}>
          <i className="fa fa-heart-o"></i>
        </DrawerIcon>

        <DrawerIcon onClick={() => toggleCartDrawer()}>
          <i className="fa fa-shopping-cart"></i>
        </DrawerIcon>

        <DrawerIcon onClick={() => toggleSigninDrawer()}>
          <i className="fa fa-user"></i>
        </DrawerIcon>

        <DrawerIcon onClick={() => toggleSettingsDrawer()}>
          <i className="fa fa-cog"></i>
        </DrawerIcon>
      </BottomDrawerContainer>
    </BottomDrawerWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSigninDrawer: () => dispatch(toggleSigninDrawer()),
  toggleWishlistDrawer: () => dispatch(toggleWishlistDrawer()),
  toggleCartDrawer: () => dispatch(toggleCartDrawer()),
  toggleSettingsDrawer: () => dispatch(toggleSettingsDrawer()),
  toggleSearchDrawer: () => dispatch(toggleSearchDrawer()),
});

export default connect(null, mapDispatchToProps)(BottomDrawer);

const BottomDrawerWrapper = styled.div`
  display: none;

  @media screen and (max-width: 578px) {
    display: unset;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 45px;
    background-color: #000;
    z-index: 100;
    box-shadow: 0 2px 5px 0 #a8a8a8;
  }
`;

const BottomDrawerContainer = styled.div`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrawerIcon = styled.span`
  color: white;
  padding: 5px 0;
  font-size: 22px;
`;
