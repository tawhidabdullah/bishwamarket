// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// import common components
import { InputField } from "../../components/common/InputField";
import { DrawerButton } from "../../components/common/Button/DrawerButton";
import { Text } from "../../components/elements/Text";
import { useHandleFetch } from "../../hooks";

// TODO should be refactored, not being DRY
// constant styles
const LabelStyles = {
  label: {
    "font-weight": "bold",
    "font-size": "18px", 
    "padding-bottom": 0,
  },
};

const SignUp = () => {

  const history = useHistory();
  const alert = useAlert();

  // signup hooks
  const [signupState, handleSignupState] = useHandleFetch({}, 'signup')

  const handleSignupSubmit = async (values, actions) => {
    
  }

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <Header>CREATE ACCOUNT</Header>

        <FormContainer>
          <Form>
            <InputField
              type="text"
              label="First Name"
              name="firstName"
              placeholder="First Name"
              customStyle={LabelStyles}
            />

            <InputField
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              customStyle={LabelStyles}
            />

            <InputField
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              customStyle={LabelStyles}
            />

            <InputField
              type="text"
              label="Email"
              name="email"
              placeholder="Email"
              customStyle={LabelStyles}
            />

            <InputField
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              customStyle={LabelStyles}
            />

            <DrawerButton wrapperStyle={{}} customStyle={{ padding: "8px 0" }}>
              CREATE ACCOUNT
            </DrawerButton>
          </Form>

          <Text
            customStyle={{
              color: "#777",
              "font-size": "13px",
            }}
          >
            Already have an account?{" "}
            <Link to="/signin">Click here to login</Link>
          </Text>
        </FormContainer>
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;

const SignUpWrapper = styled.section`
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const SignUpContainer = styled.div`
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

  & span a {
    text-decoration: none;
    color: #ff6000;
    transition: 0.2s ease-in-out;

    :hover {
      color: #777;
    }
  }
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
