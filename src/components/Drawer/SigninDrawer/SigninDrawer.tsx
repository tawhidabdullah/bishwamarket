import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import backdrop element
import { BackDrop } from "../../elements/Backdrop";

// import toggle drawer action
import { toggleSigninDrawer } from "../../../redux/global/global.actions";

// import form component
import { InputField } from "../../common/InputField";
import { DrawerButton } from "../../common/Button/DrawerButton";

const SigninDrawer = ({ open, toggleSigninDrawer }) => {
  return (
    <Fragment>
      <BackDrop show={open} clicked={() => toggleSigninDrawer()} />
      <SigninDrawerContainer show={open}>
        <DrawerHeader>
          <HeaderText>MY ACCOUNT</HeaderText>
          <HeaderText onClick={() => toggleSigninDrawer()}>
            <i className="fa fa-times"></i>
          </HeaderText>
        </DrawerHeader>

        <hr />

        <FormContainer>
          <InputField label="Email" type="email" placeholder="Email" />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <DrawerButton
            wrapperStyle={{}}
            customStyle={{ "border-radius": "25px" }}
          >
            Login
          </DrawerButton>
          <Text customStyles={{ "font-weight": "bold", cursor: "pointer" }}>
            Forgot Password?
          </Text>
          <Text customStyles={{ cursor: "pointer" }}>
            New to store? Signup now
          </Text>
        </FormContainer>
      </SigninDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSigninDrawer: () => dispatch(toggleSigninDrawer()),
});

export default connect(null, mapDispatchToProps)(SigninDrawer);

const SigninDrawerContainer = styled.div`
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

  @media (max-width: 500px) {
    width: 80%;
    max-width: 80%;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  font-size: 18px;
  padding: 15px 10px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.8px;

  :last-child {
    cursor: pointer;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  color: #ff6000;
  font-size: 14px;
  padding: 5px 0;
  ${(props) => props.customStyles};
`;
