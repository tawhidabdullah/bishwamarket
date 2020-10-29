// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useAlert } from "react-alert";

// import common components
import { InputField } from "../../components/common/InputField";
import { DrawerButton } from "../../components/common/Button/DrawerButton";
import { Text } from "../../components/elements/Text";

// validation schema
import {
  initialSigninValues,
  signinValidationSchema,
} from "../../validation/Signin.validator";

// import state
import { sessionOperations } from "../../state/ducks/session";

// import hooks
import { useHandleFetch } from "../../hooks";

// input field styles
const inputStyles = {
  label: {
    "font-weight": "bold",
    "font-size": "18px",
    "padding-bottom": 0,
  },
};

const SignIn = () => {
  const history = useHistory();
  const alert = useAlert();

  // hooks for signin
  const [signinState, handleSigninPost] = useHandleFetch({}, "signin");

  const handleSigninSubmit = async (values, actions) => {
    console.log(values);
  };

  return (
    <SignInWrapper>
      <SignInContainer>
        <Header>Login</Header>

        <FormContainer>
          <Formik
            initialValues={{ ...initialSigninValues }}
            validationSchema={signinValidationSchema}
            validateOnBlur={false}
            onSubmit={(values, actions) => handleSigninSubmit(values, actions)}
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
              <Form onSubmit={handleSubmit}>
                <InputField
                  type="text"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  value={values.username}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("username");
                  }}
                  customStyle={inputStyles}
                />
                <ErrorText>
                  {(touched.username && errors.username) ||
                    (!isSubmitting && signinState.error["error"]["username"])}
                </ErrorText>

                <InputField
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  customStyle={inputStyles}
                />

                <ButtonContainer>
                  <DrawerButton
                    wrapperStyle={{ "padding-right": "10px" }}
                    customStyle={{ padding: "8px 0", width: "80%" }}
                  >
                    Login
                  </DrawerButton>

                  <Text
                    customStyle={{
                      "padding-left": "10px",
                      "white-space": "nowrap",
                    }}
                    clickAction={() => history.push("/forgot-password")}
                  >
                    Forgot your password?
                  </Text>
                </ButtonContainer>
              </Form>
            )}
          </Formik>
          <Text
            customStyle={{
              color: "#777",
              "font-size": "13px",
            }}
          >
            Sign up for a free account at our store. Registration is quick and
            easy. It allows you to be able to order from our shop. To start
            shopping click register.
          </Text>
          <br />
          <br />

          <Text
            customStyle={{
              color: "#ff6000",
              "font-size": "13px",
              cursor: "pointer",
              transition: "0.2s ease-in-out",
              ":hover": { color: "#777" },
              "margin-top": "20px",
            }}
            clickAction={() => history.push("/signup")}
          >
            Create an Account
          </Text>
        </FormContainer>
      </SignInContainer>
    </SignInWrapper>
  );
};

export default SignIn;

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 12px;
  margin-top: -25px;
  position: absolute;
  padding: 0 5px;
`;

const SignInWrapper = styled.section`
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const SignInContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 30px 10px;
  background-color: #fff;

  @media screen and (max-width: 991px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 578px) {
    width: 90%;
  }
`;

const Header = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #333;
  font-weight: 700;
  margin-top: -5px;
  font-size: 22px;
`;

const FormContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Form = styled.form`
  background-color: #f2f4f7;
  padding: 30px 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    width: 50%;
  }

  & span {
    color: #ff6000;
    cursor: pointer;
    letter-spacing: 0;
    font-size: 13px;
    transition: 0.2s ease-in-out;
    width: 50%;
    /* margin-right: auto; */

    :hover {
      color: #777;
    }
  }

  @media screen and (max-width: 578px) {
    & span {
      white-space: normal;
    }
  }
`;
