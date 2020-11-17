// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useAlert } from "react-alert";
// import { connect } from "react-redux";

// import common components
import { InputField } from "../../components/common/InputField";
import { DrawerButton } from "../../components/common/Button/DrawerButton";
import { Text } from "../../components/elements/Text";

// validation schema
import {
  initialSignupValues,
  signupValidationSchema,
} from "../../validation/Signup.validator";

// import state
// import { sessionOperations } from "../../state/ducks/session";

// import hooks
import { useHandleFetch } from "../../hooks";

// should be refactored, not beign DRY
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

  // hooks for sign up
  const [signupState, handleSignupPost] = useHandleFetch({}, "signup");

  const handleSignup = async (values, actions) => {
    const signupRes = await handleSignupPost({
      body: values,
    });

    if (signupRes && signupRes["status"] === "ok") {
      history.push("/signin");
      alert.success("Registration successfull");
    } else {
      alert.error("Something went wrong!");
      actions.resetForm({});
      // if (
      //   signupState.error["isError"] &&
      //   !(Object.keys(signupState.error["error"]).length > 0)
      // ) {
      //   actions.resetForm({});
      //   alert.error("Something went wrong");
      // }
    }

    actions.setSubmitting(false);
  };

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <Header>CREATE ACCOUNT</Header>

        <FormContainer>
          <Formik
            initialValues={{ ...initialSignupValues }}
            onSubmit={(values, actions) => handleSignup(values, actions)}
            validationSchema={signupValidationSchema}
            validateOnBlur={false}
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
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  customStyle={LabelStyles}
                  value={values.firstName}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("firstName");
                  }}
                />

                <ErrorText>
                  {(touched.firstName && errors.firstName) ||
                    (!isSubmitting && signupState.error["error"]["firstName"])}
                </ErrorText>

                <InputField
                  type="text"
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  customStyle={LabelStyles}
                  value={values.lastName}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("lastName");
                  }}
                />

                <ErrorText>
                  {(touched.lastName && errors.lastName) ||
                    (!isSubmitting && signupState.error["error"]["lastName"])}
                </ErrorText>

                <InputField
                  type="text"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  customStyle={LabelStyles}
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("email");
                  }}
                />
                <ErrorText>
                  {(touched.email && errors.email) ||
                    (!isSubmitting && signupState.error["error"]["username"])}
                </ErrorText>

                {/* <InputField
                  type="text"
                  label="City"
                  name="city"
                  placeholder="City"
                  customStyle={LabelStyles}
                  value={values.city}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("city");
                  }}
                />
                <ErrorText>
                  {(touched.city && errors.city) ||
                    (!isSubmitting && signupState.error["error"]["city"])}
                </ErrorText> */}

                {/* <InputField
                  type="text"
                  label="Address"
                  name="address1"
                  placeholder="Enter address"
                  customStyle={LabelStyles}
                  value={values.address1}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("address1");
                  }}
                />
                <ErrorText>
                  {(touched.address1 && errors.address1) ||
                    (!isSubmitting && signupState.error["error"]["address1"])}
                </ErrorText> */}

                {/* <InputField
                  type="text"
                  label="Phone"
                  name="phone"
                  placeholder="Enter phone number"
                  customStyle={LabelStyles}
                  value={values.phone}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("phone");
                  }}
                />
                <ErrorText>
                  {(touched.phone && errors.phone) ||
                    (!isSubmitting && signupState.error["error"]["phone"])}
                </ErrorText> */}

                <InputField
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  customStyle={LabelStyles}
                  value={values.password}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched("password");
                  }}
                />
                <ErrorText>
                  {(touched.password && errors.password) ||
                    (!isSubmitting && signupState.error["error"]["password"])}
                </ErrorText>

                <DrawerButton
                  wrapperStyle={{ "margin-top": "20px" }}
                  customStyle={{ padding: "8px 0" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  {signupState.isLoading
                    ? "CREATING ACCOUNT..."
                    : "CREATE ACCOUNT"}
                </DrawerButton>
              </Form>
            )}
          </Formik>

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

const ErrorText = styled.p`
  color: rgba(255, 0, 0, 0.759);
  font-size: 15px;
  margin-top: -12px;
  position: absolute;
`;

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
