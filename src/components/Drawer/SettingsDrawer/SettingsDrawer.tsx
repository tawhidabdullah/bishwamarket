import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import backdrop element
import { BackDrop } from "../../elements/Backdrop";
import DrawerHeader from "../DrawerElements/DrawerHeader";

// import toggle drawer action
import { toggleSettingsDrawer } from "../../../redux/global/global.actions";

const SettingsDrawer = ({ open, toggleSettingsDrawer }) => {
  return (
    <Fragment>
      <BackDrop show={open} clicked={() => toggleSettingsDrawer()} />
      <SettingsDrawerContainer show={open}>
        <DrawerHeader
          content="MY SETTINGS"
          handleClose={() => toggleSettingsDrawer()}
          customStyle={{ "font-size": "18px", "font-weight": "normal" }}
        />

        <SettingsContentContainer>
          <SettingsContent>
            <SettingsContentItem>Language</SettingsContentItem>
            <SettingsContentItem>English</SettingsContentItem>
            <SettingsContentItem>French</SettingsContentItem>
            <SettingsContentItem>Bangla</SettingsContentItem>
          </SettingsContent>

          <SettingsContent>
            <SettingsContentItem>CURRENCY</SettingsContentItem>
            <SettingsContentItem>Euro</SettingsContentItem>
            <SettingsContentItem>Dollar</SettingsContentItem>
            <SettingsContentItem>Pound</SettingsContentItem>
            <SettingsContentItem>BDT</SettingsContentItem>
          </SettingsContent>
        </SettingsContentContainer>
      </SettingsDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSettingsDrawer: () => dispatch(toggleSettingsDrawer()),
});

export default connect(null, mapDispatchToProps)(SettingsDrawer);

const SettingsDrawerContainer = styled.div`
  position: fixed;
  width: 20rem;
  max-width: 70%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.6s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
`;

const SettingsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingsContent = styled.ul`
  margin-right: auto;
  margin-left: 35px;
  font-family: PT Sans, sans-serif;

  & li:first-child {
    font-weight: bold;
    font-size: 18px;
    color: #333;
  }
`;
const SettingsContentItem = styled.li`
  list-style: none;
  padding: 10px 0;
`;

const Text = styled.p`
  color: #ff6000;
  font-size: 14px;
  padding: 5px 0;
  ${(props) => props.customStyles};
`;
