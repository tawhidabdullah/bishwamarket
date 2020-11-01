//@ts-nocheck
import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

// import backdrop element
import { BackDrop } from "../../elements/Backdrop";

// import toggle drawer action
import { toggleSigninDrawer } from "../../../state/ducks/globalState/actions";

// import form component
import { InputField } from "../../common/InputField";
import { DrawerButton } from "../../common/Button/DrawerButton";

// validation schema
import {
  initialSigninValues,
  signinValidationSchema,
} from "../../../validation/Signin.validator";

// import session actions
import { sessionOperations } from "../../../state/ducks/session";
import { globalOperations } from "../../../state/ducks/globalState";

// import hooks
import { useHandleFetch } from "../../../hooks";

// styles
const inputStyles = { "border-radius": "20px" };

const SigninDrawer = ({ open, toggleSigninDrawer, login }) => {
  const alert = useAlert();
  const history = useHistory();

  // hooks for signin
  const [signinState, handleLoginPost] = useHandleFetch({}, "signin");

  const handleLoginSubmit = async (values, actions) => {
    const loginRes = await handleLoginPost({
      body: {
        username: values.email,
        password: values.password,
      },
    });

    if (loginRes && loginRes["status"] === "ok") {
      const { token } = loginRes.data;
      localStorage.removeItem("authToken");
      localStorage.setItem("authToken", token);
      login();
      alert.success("Logged in successsfully!");
      toggleSigninDrawer();
    } else {
      alert.error("Something went wrong!");
    }

    actions.resetForm({});
    actions.setSubmitting(false);
  };

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

        <Formik
          initialValues={{ ...initialSigninValues }}
          validationSchema={signinValidationSchema}
          validateOnBlur={false}
          onSubmit={(values, actions) => handleLoginSubmit(values, actions)}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isSubmitting,
            touched,
            setFieldTouched,
          }) => (
            <FormContainer onSubmit={handleSubmit}>
              <InputField
                type="text"
                label="Email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={(e) => {
                  handleChange(e);
                  setFieldTouched("email");
                }}
                customStyle={inputStyles}
              />

              <ErrorText>
                {(touched.email && errors.email) ||
                  (!isSubmitting && signinState.error["error"]["username"])}
              </ErrorText>

              <InputField
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
                customStyle={inputStyles}
                value={values.password}
                onChange={(e) => {
                  handleChange(e);
                  setFieldTouched("password");
                }}
              />

              <ErrorText>
                {(touched.password && errors.password) ||
                  (!isSubmitting && signinState.error["error"]["password"])}
              </ErrorText>

              <DrawerButton
                wrapperStyle={{}}
                customStyle={{ "border-radius": "25px" }}
                onClick={() => handleSubmit()}
              >
                {isSubmitting ? "Login..." : "Login"}
              </DrawerButton>

              <Text
                clickAction={() => history.push("/forgot-password")}
                customStyles={{ "font-weight": "bold", cursor: "pointer" }}
              >
                Forgot Password?
              </Text>
              <Text
                clickAction={() => history.push("/signup")}
                customStyles={{ cursor: "pointer" }}
              >
                New to store? Signup now
              </Text>
            </FormContainer>
          )}
        </Formik>
      </SigninDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = {
  toggleSigninDrawer: globalOperations.toggleSigninDrawer,
  login: sessionOperations.login,
};

export default connect(null, mapDispatchToProps)(SigninDrawer);

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 15px;
  margin-top: -10px;
  position: relative;
  padding: 5px 10px;
`;

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
